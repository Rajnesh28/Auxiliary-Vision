#Importing module for conversions
from pdf2image import convert_from_path

#Store PDF with convert_from_path function
images = convert_from_path('example.pdf')

for i in range(len(images)):
    #Save pages as JPEG in the pdf
    images[i].save('page' + str(i+1) + '.jpeg', 'JPEG')