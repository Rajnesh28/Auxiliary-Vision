import os 
import io
import json
from pathlib import Path

from google.cloud import vision
from BaseProcessing import BaseProcessing

class LabelProcessing(BaseProcessing):
    
    def __init__(self, images):
        super().__init__(images)

    def label_processing(self, images):
        """Read the image file from the smartphone
        
            Args:
            image: type string 
            
            Returns:
            labels: type list
        """

        labels = list()
        
        os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'M:\StormHacks2022\Back-End\stormhacks2022-341808-d6fa85e1221a.json'
        client = vision.ImageAnnotatorClient()

        os.chdir('media/photos')
        file_name = os.path.relpath(f"{images}.jpg")

        with io.open(file_name, 'rb') as image_file:
            content = image_file.read()

        image = vision.Image(content=content)

        response = client.text_detection(image=image)
        items = response.text_annotations

        for label in items:
           labels.append(label.description)

        labels.pop(0)

        json_file = 'text.json'

        parent = os.path.dirname(os.getcwd())
        os.chdir(parent)
        os.chdir("json")
        with open(json_file, 'w') as f:
            json.dump(labels, f)
