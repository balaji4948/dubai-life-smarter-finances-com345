import mammoth
import asyncio
from playwright.async_api import async_playwright

css = """
body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    max-width: 800px;
    margin: 0 auto;
    padding: 40px;
    background-color: #fcfcfc;
}

h1 {
    font-size: 2.5em;
    color: #2c3e50;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
    margin-bottom: 20px;
    text-align: center;
}

h2 {
    font-size: 1.8em;
    color: #2980b9;
    margin-top: 30px;
    margin-bottom: 15px;
}

h3 {
    font-size: 1.4em;
    color: #34495e;
}

p {
    margin-bottom: 15px;
    text-align: justify;
}

ul, ol {
    margin-bottom: 15px;
    padding-left: 25px;
}

li {
    margin-bottom: 8px;
}

strong {
    color: #1a1a1a;
}

blockquote {
    border-left: 4px solid #3498db;
    margin-left: 0;
    padding-left: 15px;
    font-style: italic;
    color: #555;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
}

th {
    background-color: #f4f4f4;
    color: #333;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 20px auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
"""

async def convert_docx_to_pdf(docx_path, pdf_path):
    # Convert docx to html using mammoth
    with open(docx_path, "rb") as docx_file:
        result = mammoth.convert_to_html(docx_file)
        html_body = result.value
        messages = result.messages
        for message in messages:
            print("Mammoth message:", message)
    
    # Create the full HTML document
    full_html = f'''
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            {css}
        </style>
    </head>
    <body>
        {html_body}
    </body>
    </html>
    '''
    
    # Generate PDF using playwright
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.set_content(full_html)
        
        # We can add header and footer if needed, but for now simple print
        await page.pdf(
            path=pdf_path,
            format="A4",
            margin={"top": "20mm", "bottom": "20mm", "left": "20mm", "right": "20mm"},
            print_background=True
        )
        await browser.close()
    
    print(f"Successfully created {pdf_path}")

if __name__ == "__main__":
    asyncio.run(convert_docx_to_pdf("Balaji_24bcs11205 ass2.docx", "Balaji_24bcs11205_ass2_Attractive.pdf"))
