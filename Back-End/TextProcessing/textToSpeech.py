from google.cloud import texttospeech as tts
import os
import json

class ttsObject():
    def __init__(self):
        os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "M:\StormHacks2022\Back-End\stormhacks2022-341808-d6fa85e1221a.json"
        self.client = tts.TextToSpeechClient()

    def runTTS(self):

        parent = os.path.dirname(os.getcwd())
        os.chdir('M:\StormHacks2022\media\json')
        file_name = 'text.json'

        with open(file_name) as f:
            text_list = json.load(f)

        parent = os.path.dirname(os.getcwd())

        os.chdir(parent)
        os.chdir("sounds")

        text = ' '.join(text_list)

        self.textInput = tts.SynthesisInput(text = text)

        self.setupVoice = tts.VoiceSelectionParams(language_code="en-US")
        self.audioConfig = tts.AudioConfig(
            audio_encoding=tts.AudioEncoding.MP3)

        self.speechResult = self.client.synthesize_speech(
            input=self.textInput, voice=self.setupVoice, audio_config=self.audioConfig)

        with open("speechOutput.mp3", "wb") as outputAudioFile:
            outputAudioFile.write(self.speechResult.audio_content)
            outputAudioFile.close()
            print("Audio file made.")



speech = ttsObject()
speech.runTTS()
