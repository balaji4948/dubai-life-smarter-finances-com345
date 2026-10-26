import math
from PIL import Image, ImageDraw

def generate_dubai_background():
    w, h = 1920, 1080
    
    # Create base image with deep emerald green gradient
    img = Image.new('RGBA', (w, h), (11, 46, 33, 255)) # #0B2E21
    draw = ImageDraw.Draw(img)

    # Vertical gradient: deeper at top (#08241A) to slightly lighter emerald at bottom (#0E4230)
    for y in range(h):
        factor = y / h
        r = int(8 + (15 - 8) * factor)
        g = int(36 + (62 - 36) * factor)
        b = int(26 + (44 - 26) * factor)
        draw.line([(0, y), (w, y)], fill=(r, g, b, 255))

    # Architectural wireframe overlay canvas
    overlay = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    ov_draw = ImageDraw.Draw(overlay)

    # Palette for wireframes (translucent pale green / mint / white lines)
    WF_DIM = (120, 195, 160, 45)
    WF_MED = (150, 225, 185, 75)
    WF_BRIGHT = (180, 245, 210, 110)
    WF_FILL = (12, 54, 38, 120)

    ground_y = 1040

    def draw_building(x, w_b, h_b, style='grid', spire_h=0):
        top_y = ground_y - h_b
        # Fill building body
        ov_draw.rectangle([x, top_y, x + w_b, ground_y], fill=WF_FILL, outline=WF_MED, width=1)
        
        # Internal wireframe grid
        step_y = 18
        curr_y = top_y + step_y
        while curr_y < ground_y:
            ov_draw.line([(x, curr_y), (x + w_b, curr_y)], fill=WF_DIM, width=1)
            curr_y += step_y

        step_x = 14
        curr_x = x + step_x
        while curr_x < x + w_b:
            ov_draw.line([(curr_x, top_y), (curr_x, ground_y)], fill=WF_DIM, width=1)
            curr_x += step_x

        # Structural diagonals if trusses style
        if style == 'truss':
            ov_draw.line([(x, top_y), (x + w_b, top_y + w_b)], fill=WF_MED, width=1)
            ov_draw.line([(x + w_b, top_y), (x, top_y + w_b)], fill=WF_MED, width=1)

        # Spire on top
        if spire_h > 0:
            spire_top = top_y - spire_h
            center_x = x + w_b // 2
            ov_draw.line([(center_x, top_y), (center_x, spire_top)], fill=WF_BRIGHT, width=2)
            ov_draw.line([(x + 2, top_y), (center_x, spire_top)], fill=WF_MED, width=1)
            ov_draw.line([(x + w_b - 2, top_y), (center_x, spire_top)], fill=WF_MED, width=1)

    def draw_stepped_burj(center_x, total_h):
        # Stepped setback tower like Burj Khalifa
        tiers = [
            (90, total_h * 0.35),
            (70, total_h * 0.22),
            (50, total_h * 0.18),
            (34, total_h * 0.12),
            (20, total_h * 0.08),
            (8, total_h * 0.05),
        ]
        curr_base = ground_y
        for width, tier_h in tiers:
            top_y = curr_base - tier_h
            x1 = center_x - width // 2
            x2 = center_x + width // 2
            ov_draw.rectangle([x1, top_y, x2, curr_base], fill=WF_FILL, outline=WF_BRIGHT, width=1)
            # internal horizontal rings
            for y_ring in range(int(top_y) + 12, int(curr_base), 14):
                ov_draw.line([(x1, y_ring), (x2, y_ring)], fill=WF_DIM, width=1)
            # central vertical axis
            ov_draw.line([(center_x, top_y), (center_x, curr_base)], fill=WF_MED, width=1)
            curr_base = top_y
        
        # Spire needle
        spire_tip = curr_base - 140
        ov_draw.line([(center_x, curr_base), (center_x, spire_tip)], fill=WF_BRIGHT, width=2)
        ov_draw.line([(center_x - 4, curr_base), (center_x, spire_tip)], fill=WF_MED, width=1)
        ov_draw.line([(center_x + 4, curr_base), (center_x, spire_tip)], fill=WF_MED, width=1)

    def draw_dubai_frame(x, w_f, h_f):
        top_y = ground_y - h_f
        pillar_w = 16
        # Outer rectangle
        ov_draw.rectangle([x, top_y, x + w_f, ground_y], fill=None, outline=WF_BRIGHT, width=2)
        # Inner void cutout
        ov_draw.rectangle([x + pillar_w, top_y + pillar_w, x + w_f - pillar_w, ground_y - pillar_w], outline=WF_MED, width=1)
        # Lattice along columns
        for y_l in range(int(top_y) + pillar_w, int(ground_y) - pillar_w, 18):
            ov_draw.line([(x, y_l), (x + pillar_w, y_l)], fill=WF_DIM, width=1)
            ov_draw.line([(x + w_f - pillar_w, y_l), (x + w_f, y_l)], fill=WF_DIM, width=1)

    # Distribute buildings across width of canvas (0 to 1920)
    # Background layer (shorter/dimmer)
    for bx in range(20, 1900, 55):
        h_bg = 180 + (int(math.sin(bx * 0.02) * 120) % 180)
        draw_building(bx, 45, h_bg, style='grid', spire_h=20 if bx % 110 == 0 else 0)

    # Midground landmarks
    draw_building(60, 85, 340, style='truss', spire_h=60)
    draw_building(180, 70, 420, style='grid', spire_h=90)
    draw_dubai_frame(300, 110, 360)
    draw_building(450, 95, 460, style='truss', spire_h=80)
    draw_building(600, 80, 390, style='grid', spire_h=40)
    
    # Centerpiece Burj Khalifa around x = 960 (center)
    draw_stepped_burj(960, 560)

    # Right side skyline
    draw_building(1080, 85, 430, style='grid', spire_h=70)
    draw_building(1210, 100, 380, style='truss', spire_h=50)
    draw_dubai_frame(1360, 110, 350)
    draw_building(1520, 80, 440, style='grid', spire_h=100)
    draw_building(1650, 90, 390, style='truss', spire_h=60)
    draw_building(1780, 75, 320, style='grid', spire_h=40)

    # Base horizontal ground line & arches across the bottom
    ov_draw.line([(0, ground_y), (w, ground_y)], fill=WF_BRIGHT, width=2)
    for arch_x in range(40, w, 80):
        ov_draw.arc([arch_x, ground_y - 24, arch_x + 50, ground_y + 24], start=180, end=0, fill=WF_MED, width=1)

    # Composite overlay on base gradient
    final_img = Image.alpha_composite(img, overlay)
    
    output_path = "dubai_emerald_skyline_bg.png"
    final_img.convert('RGB').save(output_path, "PNG", quality=95)
    print(f"Successfully generated {output_path} ({w}x{h})")

if __name__ == "__main__":
    generate_dubai_background()
