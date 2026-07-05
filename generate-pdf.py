import weasyprint
import os

file_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'cv-print.html')
output_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'cv-andres.pdf')

html = weasyprint.HTML(filename=file_path)
html.write_pdf(output_path)
print(f'PDF generado: {output_path}')
