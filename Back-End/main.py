from fastapi import FastAPI, File, UploadFile
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import uvicorn
import os

app = FastAPI()

hostKey = "127.0.0.1"
portNum = 8000

# displays what audio files are available for the front-end


@app.get("/sounds")
async def sounds():
    output = []
    for file in os.listdir("media/sounds"):
        output.append(
            {"path": hostKey + ":" + str(portNum) + "/media/sounds/" + file})

    return output

# @app.get("/images")
# async def getImage():


# uploads MP3
app.mount("/media", StaticFiles(directory="media"), name="media")


if __name__ == '__main__':
    uvicorn.run(app, host=hostKey, port=portNum)
