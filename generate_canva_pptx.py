import os
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE

def build_presentation():
    prs = Presentation()
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)
    blank_layout = prs.slide_layouts[6]

    bg_img_path = "dubai_emerald_skyline_bg.png"
    if not os.path.exists(bg_img_path):
        import create_background
        create_background.generate_dubai_background()

    # Color Tokens from Canva reference
    BG_EMERALD = RGBColor(11, 46, 33)       # #0B2E21
    CARD_BG = RGBColor(9, 38, 27)           # #09261B deep container
    CARD_BG_LIGHT = RGBColor(14, 56, 40)    # #0E3828
    CARD_BORDER = RGBColor(40, 110, 80)     # #286E50
    TEXT_WHITE = RGBColor(255, 255, 255)
    TEXT_MINT = RGBColor(167, 243, 208)     # #A7F3D0
    TEXT_BODY = RGBColor(226, 245, 236)     # #E2F5EC
    TEXT_MUTED = RGBColor(140, 195, 170)    # #8CC3AA
    ACCENT_GOLD = RGBColor(253, 230, 138)   # #FDE68A

    FONT_TITLE = "Montserrat"
    FONT_BODY = "Arial"

    def apply_slide_bg(slide):
        slide.shapes.add_picture(bg_img_path, 0, 0, Inches(13.333), Inches(7.5))

    def add_card(slide, left, top, width, height, bg_color=CARD_BG, border_color=CARD_BORDER):
        shape = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, width, height)
        shape.fill.solid()
        shape.fill.fore_color.rgb = bg_color
        if border_color:
            shape.line.color.rgb = border_color
            shape.line.width = Pt(1)
        else:
            shape.line.fill.background()
        return shape

    def add_header(slide, section_tag, title_text):
        tx_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.4), Inches(11.733), Inches(0.95))
        tf = tx_box.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

        p = tf.paragraphs[0]
        p.text = section_tag.upper()
        p.font.name = FONT_TITLE
        p.font.size = Pt(10.5)
        p.font.bold = True
        p.font.color.rgb = TEXT_MINT

        p2 = tf.add_paragraph()
        p2.text = title_text.upper()
        p2.font.name = FONT_TITLE
        p2.font.size = Pt(22)
        p2.font.bold = True
        p2.font.color.rgb = TEXT_WHITE
        p2.space_before = Pt(3)

    # ==============================================================
    # SLIDE 1: COVER
    # ==============================================================
    s1 = prs.slides.add_slide(blank_layout)
    apply_slide_bg(s1)

    tx_box1 = s1.shapes.add_textbox(Inches(1.5), Inches(1.8), Inches(10.333), Inches(3.8))
    tf1 = tx_box1.text_frame
    tf1.word_wrap = True
    tf1.vertical_anchor = MSO_ANCHOR.MIDDLE

    p = tf1.paragraphs[0]
    p.alignment = PP_ALIGN.CENTER
    p.text = "The Youth Financial Wellbeing Dubai"
    p.font.name = FONT_TITLE
    p.font.size = Pt(16)
    p.font.bold = True
    p.font.color.rgb = TEXT_WHITE

    p2 = tf1.add_paragraph()
    p2.alignment = PP_ALIGN.CENTER
    p2.text = "Every Dirham Has A Plan"
    p2.font.name = FONT_TITLE
    p2.font.size = Pt(46)
    p2.font.bold = True
    p2.font.color.rgb = TEXT_WHITE
    p2.space_before = Pt(8)

    p3 = tf1.add_paragraph()
    p3.alignment = PP_ALIGN.CENTER
    p3.text = "COM345 Communication Plan"
    p3.font.name = FONT_TITLE
    p3.font.size = Pt(20)
    p3.font.color.rgb = TEXT_MINT
    p3.space_before = Pt(14)

    p4 = tf1.add_paragraph()
    p4.alignment = PP_ALIGN.CENTER
    p4.text = 'Campaign Message: “Dubai Life. Smarter Finances.”'
    p4.font.name = FONT_BODY
    p4.font.size = Pt(14)
    p4.font.color.rgb = TEXT_BODY
    p4.space_before = Pt(6)

    add_card(s1, Inches(2.5), Inches(5.8), Inches(8.333), Inches(0.85), bg_color=CARD_BG, border_color=CARD_BORDER)
    tx_t = s1.shapes.add_textbox(Inches(2.6), Inches(5.95), Inches(8.133), Inches(0.6))
    tf_t = tx_t.text_frame
    p_t = tf_t.paragraphs[0]
    p_t.alignment = PP_ALIGN.CENTER
    p_t.text = "PROJECT TEAM: Lareb's Part  •  Gleb's Part  •  Amaliya's Part  •  Akbar's Part"
    p_t.font.name = FONT_TITLE
    p_t.font.size = Pt(12)
    p_t.font.bold = True
    p_t.font.color.rgb = TEXT_MINT

    # ==============================================================
    # SLIDE 2: Lareb’s Part — 1. Background (Macro Factors - Synthesized)
    # ==============================================================
    s2 = prs.slides.add_slide(blank_layout)
    apply_slide_bg(s2)
    add_header(s2, "Lareb’s Part • 1. Background", "Rising Cost-of-Living Pressures in Dubai")

    items_s2 = [
        ("Housing & Demographic Strain", "• Sustained population influx (~470 new arrivals daily) outpaces residential completions.\n• Housing supply constraints make accommodation the dominant expense driver (The National, 2025)."),
        ("Rental Hikes vs. Flat Wages", "• Residential lease rates projected to climb up to 6% in 2026 (Abbas, 2025).\n• Contrasts with corporate baseline salary projections indicating flat remuneration in 2025 (ValuStrat, 2025)."),
        ("Transit & Mobility Expenses", "• Daily commuting overheads increased markedly with dynamic traffic tariffs.\n• Salik peak-hour toll rates elevated from AED 4 to AED 6 per gate passage (Gulf Business, 2024)."),
        ("BNPL & Credit File Visibility", "• Micro-financing commitments (Tabby, Tamara) are formally logged on Al Etihad Credit Bureau files.\n• Everyday installment debt directly influences future bank lending and rental approvals (Gulf News, 2026).")
    ]

    add_card(s2, Inches(0.8), Inches(1.45), Inches(11.733), Inches(0.8), bg_color=CARD_BG)
    tb_intro2 = s2.shapes.add_textbox(Inches(1.0), Inches(1.55), Inches(11.333), Inches(0.6))
    tf_i2 = tb_intro2.text_frame
    tf_i2.word_wrap = True
    p = tf_i2.paragraphs[0]
    p.text = "Macroeconomic Stressors: Young adult residents (ages 25–34) face intensifying living expenditure hurdles across Dubai."
    p.font.name = FONT_TITLE
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = TEXT_MINT

    w_card = Inches(5.7)
    h_card = Inches(2.05)
    for i, (title, desc) in enumerate(items_s2):
        cx = Inches(0.8) + (i % 2) * Inches(6.033)
        cy = Inches(2.45) + (i // 2) * Inches(2.25)
        add_card(s2, cx, cy, w_card, h_card, bg_color=CARD_BG)
        
        tb = s2.shapes.add_textbox(cx + Inches(0.25), cy + Inches(0.18), w_card - Inches(0.5), h_card - Inches(0.3))
        tf = tb.text_frame
        tf.word_wrap = True
        
        p = tf.paragraphs[0]
        p.text = title
        p.font.name = FONT_TITLE
        p.font.size = Pt(13)
        p.font.bold = True
        p.font.color.rgb = TEXT_WHITE
        
        p2 = tf.add_paragraph()
        p2.text = desc
        p2.font.name = FONT_BODY
        p2.font.size = Pt(10.5)
        p2.font.color.rgb = TEXT_BODY
        p2.space_before = Pt(5)

    # ==============================================================
    # SLIDE 3: Lareb’s Part — 1. Background (The Communication Issue)
    # ==============================================================
    s3 = prs.slides.add_slide(blank_layout)
    apply_slide_bg(s3)
    add_header(s3, "Lareb’s Part • 1. Background", "The Core Communication Dilemma")

    w_half = Inches(5.7)
    add_card(s3, Inches(0.8), Inches(1.5), w_half, Inches(5.2), bg_color=CARD_BG)
    tb_c1 = s3.shapes.add_textbox(Inches(1.1), Inches(1.8), Inches(5.1), Inches(4.6))
    tf_c1 = tb_c1.text_frame
    tf_c1.word_wrap = True

    p = tf_c1.paragraphs[0]
    p.text = "AWARENESS DEFICIT ON CIVIC TOOLS"
    p.font.name = FONT_TITLE
    p.font.size = Pt(15)
    p.font.bold = True
    p.font.color.rgb = TEXT_MINT

    p2 = tf_c1.add_paragraph()
    p2.text = (
        "• Comprehensive municipal mechanisms already exist to protect consumers.\n\n"
        "• Key assets include the Dubai Land Department (DLD) Rental Calculator/Index and Al Etihad Credit Bureau (AECB) personal credit files.\n\n"
        "• Critical Bottleneck: Widespread unawareness among young professionals leaves these vital protections underutilized."
    )
    p2.font.name = FONT_BODY
    p2.font.size = Pt(12)
    p2.font.color.rgb = TEXT_BODY
    p2.space_before = Pt(12)

    add_card(s3, Inches(6.833), Inches(1.5), w_half, Inches(5.2), bg_color=CARD_BG)
    tb_c2 = s3.shapes.add_textbox(Inches(7.133), Inches(1.8), Inches(5.1), Inches(4.6))
    tf_c2 = tb_c2.text_frame
    tf_c2.word_wrap = True

    p = tf_c2.paragraphs[0]
    p.text = "SOCIAL MEDIA & REGULATORY SHIFT"
    p.font.name = FONT_TITLE
    p.font.size = Pt(15)
    p.font.bold = True
    p.font.color.rgb = TEXT_MINT

    p2 = tf_c2.add_paragraph()
    p2.text = (
        "• Digital Exposure: Youth heavily consult informal social networks where lifestyle inflation and unvetted guidance proliferate.\n\n"
        "• Systemic Risk: Impulse spending and unchecked debt cycles are accelerated by aspirational online feeds.\n\n"
        "• National Countermeasure: The UAE mandated formal licensing for financial influencers ('finfluencers') to mitigate unverified advice (Issa, 2025)."
    )
    p2.font.name = FONT_BODY
    p2.font.size = Pt(12)
    p2.font.color.rgb = TEXT_BODY
    p2.space_before = Pt(12)

    # ==============================================================
    # SLIDE 4: Lareb’s Part — 2. Problems & Opportunities
    # ==============================================================
    s4 = prs.slides.add_slide(blank_layout)
    apply_slide_bg(s4)
    add_header(s4, "Lareb’s Part • 2. Problems and Opportunities", "Problem and Opportunity Analysis")

    add_card(s4, Inches(0.8), Inches(1.5), Inches(5.7), Inches(5.2), bg_color=CARD_BG)
    tb_pr = s4.shapes.add_textbox(Inches(1.1), Inches(1.8), Inches(5.1), Inches(4.6))
    tf_pr = tb_pr.text_frame
    tf_pr.word_wrap = True

    p = tf_pr.paragraphs[0]
    p.text = "THE CORE PROBLEM"
    p.font.name = FONT_TITLE
    p.font.size = Pt(16)
    p.font.bold = True
    p.font.color.rgb = TEXT_MINT

    p2 = tf_pr.add_paragraph()
    p2.text = (
        "• Inflationary Friction: Young residents in Dubai navigate steep living expenses without accessible, trustworthy financial playbooks.\n\n"
        "• Informational Disconnect: Institutional consumer advisory services exist in abundance, yet public awareness remains critically low.\n\n"
        "• Algorithmic Distortions: Digital platforms promote conspicuous consumption and unverified personal finance advice, amplifying financial stress."
    )
    p2.font.name = FONT_BODY
    p2.font.size = Pt(11.5)
    p2.font.color.rgb = TEXT_BODY
    p2.space_before = Pt(12)

    add_card(s4, Inches(6.833), Inches(1.5), Inches(5.7), Inches(5.2), bg_color=CARD_BG)
    tb_op = s4.shapes.add_textbox(Inches(7.133), Inches(1.8), Inches(5.1), Inches(4.6))
    tf_op = tb_op.text_frame
    tf_op.word_wrap = True

    p = tf_op.paragraphs[0]
    p.text = "THE STRATEGIC OPPORTUNITY"
    p.font.name = FONT_TITLE
    p.font.size = Pt(16)
    p.font.bold = True
    p.font.color.rgb = TEXT_MINT

    p2 = tf_op.add_paragraph()
    p2.text = (
        "• Timely Intervention: YFWD has a proactive window to intervene before localized financial pressure cascades into wider social insolvency.\n\n"
        "• Trusted Institutional Positioning: Operating as an impartial entity, YFWD can establish authority across channels youth already frequent.\n\n"
        "• Triple Impact: Simultaneously promote structured budgeting, long-term asset building, and seamless navigation of verified civic support tools."
    )
    p2.font.name = FONT_BODY
    p2.font.size = Pt(11.5)
    p2.font.color.rgb = TEXT_BODY
    p2.space_before = Pt(12)

    # ==============================================================
    # SLIDE 5: Gleb’s Part — Target Publics & Message
    # ==============================================================
    s5 = prs.slides.add_slide(blank_layout)
    apply_slide_bg(s5)
    add_header(s5, "Gleb’s Part", "Target Publics & Core Message")

    add_card(s5, Inches(0.8), Inches(1.5), Inches(5.7), Inches(5.2), bg_color=CARD_BG)
    tb_tp = s5.shapes.add_textbox(Inches(1.1), Inches(1.8), Inches(5.1), Inches(4.6))
    tf_tp = tb_tp.text_frame
    tf_tp.word_wrap = True

    p = tf_tp.paragraphs[0]
    p.text = "STAKEHOLDER SEGMENTATION"
    p.font.name = FONT_TITLE
    p.font.size = Pt(16)
    p.font.bold = True
    p.font.color.rgb = TEXT_MINT

    p2 = tf_tp.add_paragraph()
    p2.text = "Primary Public (Direct Audience):"
    p2.font.name = FONT_TITLE
    p2.font.size = Pt(13)
    p2.font.bold = True
    p2.font.color.rgb = TEXT_WHITE
    p2.space_before = Pt(12)

    p3 = tf_tp.add_paragraph()
    p3.text = "• Dubai residents aged 25–34\n• Key Sub-cohorts: Early-career professionals, recent university graduates, and independent residential renters."
    p3.font.name = FONT_BODY
    p3.font.size = Pt(11.5)
    p3.font.color.rgb = TEXT_BODY
    p3.space_before = Pt(4)

    p4 = tf_tp.add_paragraph()
    p4.text = "Secondary Publics (Amplification Partners):"
    p4.font.name = FONT_TITLE
    p4.font.size = Pt(13)
    p4.font.bold = True
    p4.font.color.rgb = TEXT_WHITE
    p4.space_before = Pt(16)

    p5 = tf_tp.add_paragraph()
    p5.text = "• Universities & academic faculties\n• Corporate employers & HR networks\n• Retail banks & financial institutions\n• Real estate portals & discount platforms\n• Civic and community youth organizations"
    p5.font.name = FONT_BODY
    p5.font.size = Pt(11.5)
    p5.font.color.rgb = TEXT_BODY
    p5.space_before = Pt(4)

    add_card(s5, Inches(6.833), Inches(1.5), Inches(5.7), Inches(5.2), bg_color=CARD_BG)
    tb_msg = s5.shapes.add_textbox(Inches(7.133), Inches(1.8), Inches(5.1), Inches(4.6))
    tf_msg = tb_msg.text_frame
    tf_msg.word_wrap = True

    p = tf_msg.paragraphs[0]
    p.text = "STRATEGIC CORE MESSAGE"
    p.font.name = FONT_TITLE
    p.font.size = Pt(16)
    p.font.bold = True
    p.font.color.rgb = TEXT_MINT

    p2 = tf_msg.add_paragraph()
    p2.text = '“Dubai Life. Smarter Finances.”'
    p2.font.name = FONT_TITLE
    p2.font.size = Pt(22)
    p2.font.bold = True
    p2.font.color.rgb = TEXT_WHITE
    p2.space_before = Pt(20)

    p3 = tf_msg.add_paragraph()
    p3.text = (
        "Core Narrative:\n"
        "Empowering emerging young adults to navigate Dubai’s urban cost landscape "
        "through data-driven budgeting methodologies, practical lifestyle planning, "
        "and direct linkage to vetted institutional cost-saving mechanisms."
    )
    p3.font.name = FONT_BODY
    p3.font.size = Pt(12)
    p3.font.color.rgb = TEXT_BODY
    p3.space_before = Pt(14)

    # ==============================================================
    # SLIDE 6: Gleb’s Part — Strategy: Educate - Equip - Connect
    # ==============================================================
    s6 = prs.slides.add_slide(blank_layout)
    apply_slide_bg(s6)
    add_header(s6, "Gleb’s Part • Strategy", "Educate - Equip - Connect Strategic Pillars")

    s_items = [
        ("Educate", "• Digital Financial Curriculum: Social media series breaking down rent indices, utility planning, and commute budgeting.\n\n• Interactive In-Person Workshops: Practical financial seminars covering baseline accounting and emergency buffer creation."),
        ("Equip", "• Digital Financial Toolkits: Free budget-planning templates, customizable spreadsheets, and savings projection tools.\n\n• Practical Resource Guides: Actionable checklists detailing rental index rights, credit scoring mechanics, and daily savings."),
        ("Connect", "• Institutional Alliances: Partnerships across retail banking, leasing platforms, and community discount programs (e.g., Fazaa).\n\n• Zywa Educational Alignment: Leverage Zywa's money-management app and prepaid-card interface to cultivate disciplined spending controls.")
    ]

    w_col = Inches(3.72)
    gap_col = Inches(0.28)
    for i, (title, desc) in enumerate(s_items):
        cx = Inches(0.8) + i * (w_col + gap_col)
        add_card(s6, cx, Inches(1.5), w_col, Inches(5.2), bg_color=CARD_BG)
        
        tb = s6.shapes.add_textbox(cx + Inches(0.25), Inches(1.8), w_col - Inches(0.5), Inches(4.6))
        tf = tb.text_frame
        tf.word_wrap = True
        
        p = tf.paragraphs[0]
        p.text = f"0{i+1}. {title.upper()}"
        p.font.name = FONT_TITLE
        p.font.size = Pt(16)
        p.font.bold = True
        p.font.color.rgb = TEXT_MINT
        
        p2 = tf.add_paragraph()
        p2.text = desc
        p2.font.name = FONT_BODY
        p2.font.size = Pt(11)
        p2.font.color.rgb = TEXT_BODY
        p2.space_before = Pt(12)

    # ==============================================================
    # SLIDE 7: Gleb’s Part — Savings Example Calculation
    # ==============================================================
    s7 = prs.slides.add_slide(blank_layout)
    apply_slide_bg(s7)
    add_header(s7, "Gleb’s Part", "Monthly Savings Simulation (AED 6,000 Budget)")

    add_card(s7, Inches(0.8), Inches(1.5), Inches(11.733), Inches(5.2), bg_color=CARD_BG)
    tb_s7 = s7.shapes.add_textbox(Inches(1.2), Inches(1.8), Inches(10.933), Inches(4.6))
    tf_s7 = tb_s7.text_frame
    tf_s7.word_wrap = True

    p = tf_s7.paragraphs[0]
    p.text = "BUDGET REALLOCATION MODEL & POTENTIAL CAPITAL RECOVERY"
    p.font.name = FONT_TITLE
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = TEXT_MINT

    p2 = tf_s7.add_paragraph()
    p2.text = (
        "• Strategic Lifestyle Adjustments: Disciplined meal planning, public transit route substitution, "
        "curbed on-demand food delivery, and cancellation of dormant digital subscriptions yield AED 460 in monthly recurring cost reclamation."
    )
    p2.font.name = FONT_BODY
    p2.font.size = Pt(12.5)
    p2.font.color.rgb = TEXT_WHITE
    p2.space_before = Pt(12)

    p3 = tf_s7.add_paragraph()
    p3.text = "Baseline AED 6,000 Monthly Budget: Net Monthly Savings Expand From AED 500 to AED 960 (+92%)"
    p3.font.name = FONT_TITLE
    p3.font.size = Pt(19)
    p3.font.bold = True
    p3.font.color.rgb = ACCENT_GOLD
    p3.space_before = Pt(18)

    p4 = tf_s7.add_paragraph()
    p4.text = (
        "• Annual Impact: Over 12 months, this reallocation preserves AED 5,520 in additional liquidity without expanding base income.\n"
        "• Academic Disclosure: Illustrative educational scenario; individual savings depend on personal consumption habits and do not reflect guaranteed financial card yields."
    )
    p4.font.name = FONT_BODY
    p4.font.size = Pt(11)
    p4.font.color.rgb = TEXT_MUTED
    p4.space_before = Pt(16)

    # ==============================================================
    # SLIDE 8: Amaliya’s Part — Channels and Tactics
    # ==============================================================
    s8 = prs.slides.add_slide(blank_layout)
    apply_slide_bg(s8)
    add_header(s8, "Amaliya’s Part • Channels and Tactics", "Educate - Equip - Connect Operational Rollout")

    tactics = [
        ("Educate (Awareness)", "• Bi-Weekly Digital Dissemination: Release two weekly educational posts/reels across Instagram and TikTok addressing rent calculators, commute planning, and saving tips.\n\n• Practical Seminar Series: Host 6 interactive workshops facilitated across university campuses, corporate workplaces, and community hubs."),
        ("Equip (Tool Delivery)", "• Digital Campaign Portal: Centralized hub hosting interactive budget worksheets, expense calculators, and downloadable guides.\n\n• Physical-to-Digital Funnels: QR code displays in high-traffic youth hubs and partner e-newsletters.\n\n• 30-Day Budget Challenge: Gamified tracking habit driving structured savings goals."),
        ("Connect (Alliances)", "• Zywa Youth Banking Alliance: Educational alignment utilizing mobile app budgeting controls and prepaid spending guardrails.\n\n• Corporate & Merchant Affiliations: Establish cost-reduction partnerships with banks, property agencies, dining outlets, and Fazaa discount networks with clear eligibility disclosures.")
    ]

    for i, (title, desc) in enumerate(tactics):
        cx = Inches(0.8) + i * (w_col + gap_col)
        add_card(s8, cx, Inches(1.5), w_col, Inches(5.2), bg_color=CARD_BG)
        
        tb = s8.shapes.add_textbox(cx + Inches(0.25), Inches(1.8), w_col - Inches(0.5), Inches(4.6))
        tf = tb.text_frame
        tf.word_wrap = True
        
        p = tf.paragraphs[0]
        p.text = title.upper()
        p.font.name = FONT_TITLE
        p.font.size = Pt(14)
        p.font.bold = True
        p.font.color.rgb = TEXT_MINT
        
        p2 = tf.add_paragraph()
        p2.text = desc
        p2.font.name = FONT_BODY
        p2.font.size = Pt(10.5)
        p2.font.color.rgb = TEXT_BODY
        p2.space_before = Pt(10)

    # ==============================================================
    # SLIDE 9: Amaliya’s Part — Budget (12 Months, Total AED 50,000)
    # ==============================================================
    s9 = prs.slides.add_slide(blank_layout)
    apply_slide_bg(s9)
    add_header(s9, "Amaliya’s Part • Budget", "12-Month Allocation & Cost Governance (AED 50,000)")

    add_card(s9, Inches(0.8), Inches(1.5), Inches(6.5), Inches(5.2), bg_color=CARD_BG)
    rows_b, cols_b = 11, 2
    table_shape = s9.shapes.add_table(rows_b, cols_b, Inches(1.0), Inches(1.7), Inches(6.1), Inches(4.7))
    tbl = table_shape.table
    tbl.columns[0].width = Inches(4.3)
    tbl.columns[1].width = Inches(1.8)

    b_data = [
        ["Research and evaluation", "5,000"],
        ["Educational content", "9,000"],
        ["Social media advertising", "10,000"],
        ["Campaign webpage tools", "6,000"],
        ["Six workshops", "9,000"],
        ["Creator collaborations", "4,000"],
        ["Printing and QR posters", "2,000"],
        ["Partner coordination", "2,000"],
        ["Contingency", "3,000"],
        ["Total", "50,000"]
    ]

    cell_h0 = tbl.cell(0, 0)
    cell_h0.text = "Item"
    cell_h1 = tbl.cell(0, 1)
    cell_h1.text = "AED"
    for c in [cell_h0, cell_h1]:
        c.fill.solid()
        c.fill.fore_color.rgb = CARD_BG_LIGHT
        for p in c.text_frame.paragraphs:
            p.font.name = FONT_TITLE
            p.font.size = Pt(10)
            p.font.bold = True
            p.font.color.rgb = TEXT_MINT

    for r, (item, aed) in enumerate(b_data):
        c0 = tbl.cell(r + 1, 0)
        c0.text = item
        c1 = tbl.cell(r + 1, 1)
        c1.text = aed
        for c in [c0, c1]:
            c.fill.solid()
            c.fill.fore_color.rgb = CARD_BG
            for p in c.text_frame.paragraphs:
                p.font.name = FONT_BODY
                p.font.size = Pt(9.5)
                if r == 9:
                    p.font.bold = True
                    p.font.color.rgb = ACCENT_GOLD
                else:
                    p.font.color.rgb = TEXT_BODY

    add_card(s9, Inches(7.5), Inches(1.5), Inches(5.033), Inches(5.2), bg_color=CARD_BG)
    tb_c = s9.shapes.add_textbox(Inches(7.8), Inches(1.8), Inches(4.433), Inches(4.6))
    tf_c = tb_c.text_frame
    tf_c.word_wrap = True

    p = tf_c.paragraphs[0]
    p.text = "FISCAL GOVERNANCE & CONTROL"
    p.font.name = FONT_TITLE
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = TEXT_MINT

    guidelines = [
        "In-Kind Venue & Speaker Sourcing: Secure complimentary university lecture halls, voluntary industry speakers, and unpaid institutional distribution networks.",
        "Internal Resource Optimization: Utilize existing YFWD personnel and reusable display materials to minimize agency and overhead costs.",
        "Pre-Commitment Pricing Audits: Validate vendor bids prior to fund disbursement and execute comprehensive monthly budget variance reviews."
    ]
    for g in guidelines:
        p_g = tf_c.add_paragraph()
        p_g.text = f"• {g}"
        p_g.font.name = FONT_BODY
        p_g.font.size = Pt(11)
        p_g.font.color.rgb = TEXT_BODY
        p_g.space_before = Pt(12)

    # ==============================================================
    # SLIDE 10: Akbar’s part — 3. Objectives (SMART)
    # ==============================================================
    s10 = prs.slides.add_slide(blank_layout)
    apply_slide_bg(s10)
    add_header(s10, "Akbar’s Part • 3. Objectives", "SMART Campaign Objectives")

    add_card(s10, Inches(0.8), Inches(1.45), Inches(11.733), Inches(0.65), bg_color=CARD_BG)
    tb_i10 = s10.shapes.add_textbox(Inches(1.0), Inches(1.55), Inches(11.333), Inches(0.5))
    tf_i10 = tb_i10.text_frame
    p = tf_i10.paragraphs[0]
    p.text = "Strategic Alignment: The campaign formalizes three SMART targets mapped directly to Educate, Equip, and Connect:"
    p.font.name = FONT_BODY
    p.font.size = Pt(12)
    p.font.color.rgb = TEXT_BODY

    objs = [
        ("Objective 1 (Awareness / Educate):", "• Increase financial literacy and YFWD resource awareness among Dubai residents aged 25–34.\n• Key Metric: Achieve 150,000 total digital impressions and maintain a 4% average engagement rate across Instagram and TikTok within 6 months."),
        ("Objective 2 (Behavioral Adoption / Equip):", "• Drive tangible utilization of practical personal finance resources.\n• Key Metric: Generate 5,000 downloads/active uses of the digital budget planner and enroll 1,000 young professionals in the \"30-Day Budget Challenge\" within 12 months."),
        ("Objective 3 (Partnership / Connect):", "• Facilitate community engagement and institutional cost-saving access.\n• Key Metric: Engage 300+ total attendees across six interactive seminars and establish at least 4 active cost-reduction partnerships (Zywa, Fazaa, rental/lifestyle platforms) by Month 12.")
    ]

    for i, (title, desc) in enumerate(objs):
        cx = Inches(0.8) + i * (w_col + gap_col)
        add_card(s10, cx, Inches(2.25), w_col, Inches(4.45), bg_color=CARD_BG)
        
        tb = s10.shapes.add_textbox(cx + Inches(0.25), Inches(2.45), w_col - Inches(0.5), Inches(4.0))
        tf = tb.text_frame
        tf.word_wrap = True
        
        p = tf.paragraphs[0]
        p.text = title
        p.font.name = FONT_TITLE
        p.font.size = Pt(12)
        p.font.bold = True
        p.font.color.rgb = TEXT_MINT
        
        p2 = tf.add_paragraph()
        p2.text = desc
        p2.font.name = FONT_BODY
        p2.font.size = Pt(10.5)
        p2.font.color.rgb = TEXT_BODY
        p2.space_before = Pt(8)

    # ==============================================================
    # SLIDE 11: Akbar’s part — 10. Evaluation (Beginning: Formative)
    # ==============================================================
    s11 = prs.slides.add_slide(blank_layout)
    apply_slide_bg(s11)
    add_header(s11, "Akbar’s Part • 10. Evaluation and Modifications", "Phase 1: Formative Baseline Evaluation")

    add_card(s11, Inches(0.8), Inches(1.45), Inches(11.733), Inches(0.85), bg_color=CARD_BG)
    tb_i11 = s11.shapes.add_textbox(Inches(1.0), Inches(1.55), Inches(11.333), Inches(0.65))
    tf_i11 = tb_i11.text_frame
    tf_i11.word_wrap = True
    p = tf_i11.paragraphs[0]
    p.text = "Tri-Phasic Evaluation Architecture: Formative (Baseline Research), Process (Ongoing Optimization), and Summative (Final Outcome Audit) to guarantee maximal ROI across the AED 50,000 budget."
    p.font.name = FONT_BODY
    p.font.size = Pt(11.5)
    p.font.color.rgb = TEXT_BODY

    add_card(s11, Inches(0.8), Inches(2.5), w_half, Inches(4.2), bg_color=CARD_BG)
    tb_b1 = s11.shapes.add_textbox(Inches(1.1), Inches(2.8), Inches(5.1), Inches(3.6))
    tf_b1 = tb_b1.text_frame
    tf_b1.word_wrap = True
    p = tf_b1.paragraphs[0]
    p.text = "Desktop Research & Social Listening:"
    p.font.name = FONT_TITLE
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = TEXT_MINT
    p2 = tf_b1.add_paragraph()
    p2.text = (
        "• Environmental Horizon Scanning: Track digital conversations, hashtags, and social sentiment regarding Dubai living expenses among demographics aged 25–34 prior to campaign launch.\n\n"
        "• Content Gap Analysis: Identify dominant spending concerns (rent, food delivery, transit) to tailor educational assets."
    )
    p2.font.name = FONT_BODY
    p2.font.size = Pt(11.5)
    p2.font.color.rgb = TEXT_BODY
    p2.space_before = Pt(10)

    add_card(s11, Inches(6.833), Inches(2.5), w_half, Inches(4.2), bg_color=CARD_BG)
    tb_b2 = s11.shapes.add_textbox(Inches(7.133), Inches(2.8), Inches(5.1), Inches(3.6))
    tf_b2 = tb_b2.text_frame
    tf_b2.word_wrap = True
    p = tf_b2.paragraphs[0]
    p.text = "Pre-Campaign Baseline Survey:"
    p.font.name = FONT_TITLE
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = TEXT_MINT
    p2 = tf_b2.add_paragraph()
    p2.text = (
        "• Diagnostic Measurement: Deploy a targeted digital survey via university and employer channels.\n\n"
        "• Benchmark Key Indices: Establish initial benchmarks on awareness of YFWD resources, discretionary spending breakdowns, and primary acute financial pressure points."
    )
    p2.font.name = FONT_BODY
    p2.font.size = Pt(11.5)
    p2.font.color.rgb = TEXT_BODY
    p2.space_before = Pt(10)

    # ==============================================================
    # SLIDE 12: Akbar’s part — 10. Evaluation (Middle: Process)
    # ==============================================================
    s12 = prs.slides.add_slide(blank_layout)
    apply_slide_bg(s12)
    add_header(s12, "Akbar’s Part • 10. Evaluation and Modifications", "Phase 2: Process Evaluation & Adaptive Control")

    mid_items = [
        ("Monthly Social Analytics:", "• Continuous Metric Audits: Monitor reach, engagement, click-through rates, and audience growth on Instagram and TikTok.\n• Adaptive Repositioning: If engagement falls below 4%, pivot resources toward higher-performing short-form video reels, creator tie-ins, or interactive Q&A polls."),
        ("Webpage & Funnel Telemetry:", "• Traffic Diagnostics: Use Google Analytics to log unique portal visits, QR poster attribution, and toolkit download completions.\n• Behavioral Drop-Off: Track milestone completion rates across the 30-Day Budget Challenge to refine user retention."),
        ("Mid-Campaign Review (Month 6):", "• Milestone Diagnostic: Audit attendance records and qualitative feedback surveys from initial workshops.\n• Tactical Reallocation: Reassign unspent portions of the AED 3,000 contingency reserve to high-performing digital channels requiring promotional boosts.")
    ]

    for i, (title, desc) in enumerate(mid_items):
        cx = Inches(0.8) + i * (w_col + gap_col)
        add_card(s12, cx, Inches(1.5), w_col, Inches(5.2), bg_color=CARD_BG)
        
        tb = s12.shapes.add_textbox(cx + Inches(0.25), Inches(1.8), w_col - Inches(0.5), Inches(4.6))
        tf = tb.text_frame
        tf.word_wrap = True
        
        p = tf.paragraphs[0]
        p.text = title
        p.font.name = FONT_TITLE
        p.font.size = Pt(13)
        p.font.bold = True
        p.font.color.rgb = TEXT_MINT
        
        p2 = tf.add_paragraph()
        p2.text = desc
        p2.font.name = FONT_BODY
        p2.font.size = Pt(10.5)
        p2.font.color.rgb = TEXT_BODY
        p2.space_before = Pt(10)

    # ==============================================================
    # SLIDE 13: Akbar’s part — 10. Evaluation (End: Summative)
    # ==============================================================
    s13 = prs.slides.add_slide(blank_layout)
    apply_slide_bg(s13)
    add_header(s13, "Akbar’s Part • 10. Evaluation and Modifications", "Phase 3: Summative Evaluation & Future Planning")

    end_items = [
        ("Post-Campaign Impact Survey:", "• Longitudinal Verification: Re-issue the digital survey at Month 12 to assess measurable shifts in financial literacy, self-reported savings discipline, and perception of YFWD as a trusted institutional mentor."),
        ("SMART Objective Audit:", "• Awareness: Total impressions achieved vs. 150,000 target.\n• Behavioral Equip: Total budget tool downloads (Target: 5,000) and 30-Day Challenge participants (Target: 1,000).\n• Connect: Workshop attendance (Target: 300) and signed partnership activations (Target: 4)."),
        ("ROI & Long-Term Scalability:", "• Fiscal Efficiency Audit: Quantify audience reach per AED disbursed.\n• Strategic Roadmap: Synthesize findings into a final governance report with recommendations for YFWD's multi-year youth financial resilience agenda.")
    ]

    for i, (title, desc) in enumerate(end_items):
        cx = Inches(0.8) + i * (w_col + gap_col)
        add_card(s13, cx, Inches(1.5), w_col, Inches(5.2), bg_color=CARD_BG)
        
        tb = s13.shapes.add_textbox(cx + Inches(0.25), Inches(1.8), w_col - Inches(0.5), Inches(4.6))
        tf = tb.text_frame
        tf.word_wrap = True
        
        p = tf.paragraphs[0]
        p.text = title
        p.font.name = FONT_TITLE
        p.font.size = Pt(13)
        p.font.bold = True
        p.font.color.rgb = TEXT_MINT
        
        p2 = tf.add_paragraph()
        p2.text = desc
        p2.font.name = FONT_BODY
        p2.font.size = Pt(10.5)
        p2.font.color.rgb = TEXT_BODY
        p2.space_before = Pt(10)

    # ==============================================================
    # SLIDE 14: ACADEMIC REFERENCES (APA 7th Edition)
    # ==============================================================
    s14 = prs.slides.add_slide(blank_layout)
    apply_slide_bg(s14)
    add_header(s14, "Academic Integrity & Documentation", "Academic References (APA 7th Edition)")

    add_card(s14, Inches(0.8), Inches(1.5), Inches(11.733), Inches(5.2), bg_color=CARD_BG)
    tb_s14 = s14.shapes.add_textbox(Inches(1.2), Inches(1.8), Inches(10.933), Inches(4.6))
    tf_s14 = tb_s14.text_frame
    tf_s14.word_wrap = True

    p = tf_s14.paragraphs[0]
    p.text = "BIBLIOGRAPHIC DOCUMENTATION OF CITED EMPIRICAL SOURCES"
    p.font.name = FONT_TITLE
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = TEXT_MINT

    references = [
        "Abbas, W. (2025, December 29). Dubai rents set to rise by up to 6% in 2026 amid growing population. Khaleej Times.",
        "Gulf Business. (2024, November 28). Dubai Salik toll dynamic pricing: Peak-hour tariffs increase to AED 6. Gulf Business.",
        "Gulf News. (2026, July 14). Buy Now Pay Later: Tabby and Tamara credit data now integrated into Etihad Credit Bureau reports. Gulf News.",
        "Issa, T. (2025, May 19). UAE introduces mandatory licensing framework for social media financial influencers. The National.",
        "The National. (2025, February 10). Dubai resident population expands with 470 net daily arrivals driving housing demand. The National News.",
        "ValuStrat Research. (2025). Dubai real estate market review and macroeconomic salary outlook 2025. ValuStrat Consulting Group."
    ]

    for ref in references:
        p_ref = tf_s14.add_paragraph()
        p_ref.text = f"•  {ref}"
        p_ref.font.name = FONT_BODY
        p_ref.font.size = Pt(11)
        p_ref.font.color.rgb = TEXT_BODY
        p_ref.space_before = Pt(10)

    p_note = tf_s14.add_paragraph()
    p_note.text = "Note: In-text citations throughout the deck align with APA 7th Edition guidelines for academic transparency and plagiarism avoidance."
    p_note.font.name = FONT_BODY
    p_note.font.size = Pt(10)
    p_note.font.italic = True
    p_note.font.color.rgb = TEXT_MUTED
    p_note.space_before = Pt(14)

    out_file = "Dubai_Life_Smarter_Finances_COM345.pptx"
    prs.save(out_file)
    print(f"Successfully generated {out_file} with {len(prs.slides)} slides matching document order, Canva emerald background, and APA 7th References!")

if __name__ == "__main__":
    build_presentation()
