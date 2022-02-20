import os
#Importing module for conversions
from pdf2image import convert_from_path

#Store PDF with convert_from_path function
os.chdir("M:\StormHacks2022\media\docs")
images = convert_from_path('default.pdf')

for i in range(len(images)):
    #Save pages as JPEG in the pdf
    images[i].save('M:\StormHacks2022\media\photos\default' + '.jpg', 'JPEG')