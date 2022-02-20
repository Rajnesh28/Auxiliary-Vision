import os 
import io
import json
from pathlib import Path

from google.cloud import vision
from BaseProcessing import BaseProcessing

class ObjectProcessing(BaseProcessing):
    
    def __init__(self, images):
        super().__init__(images)

    def object_processing(self, images):

        """Read the image file from the smartphone
        
            Args:
            image: type string 
            
            Returns:
            objects: type list
        """

        objects = list()

        os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'M:\StormHacks2022\Back-End\stormhacks2022-341808-d6fa85e1221a.json'
        client = vision.ImageAnnotatorClient()

        os.chdir('media/photos')
        file_name = os.path.relpath(f"{images}.jpg")

        with io.open(file_name, 'rb') as image_file:
            content = image_file.read()

        image = vision.Image(content=content)

        response = client.object_localization(image=image)
        items = response.localized_object_annotations


        for object in items:
           objects.append(object.name)

        json_file = 'text.json'

        parent = os.path.dirname(os.getcwd())
        os.chdir(parent)
        os.chdir("json")
        with open(json_file, 'w') as f:
            json.dump(objects, f)