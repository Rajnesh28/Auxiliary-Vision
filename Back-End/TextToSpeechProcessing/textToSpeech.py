from google.cloud import texttospeech as tts
import os
import pygame

# os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'spatial-rig-341818-3c8fae1f575e.json'
# client = tts.TextToSpeechClient()

# textInput = tts.SynthesisInput(text="Stormhacks 2022")

# setupVoice = tts.VoiceSelectionParams(language_code="en-US")
# audioConfig = tts.AudioConfig(audio_encoding=tts.AudioEncoding.MP3)

# speechResult = client.synthesize_speech(
#     input=textInput, voice=setupVoice, audio_config=audioConfig)

# with open("speechOutput.mp3", "wb") as outputAudioFile:
#     outputAudioFile.write(speechResult.audio_content)
#     outputAudioFile.close()
#     print("Audio file made.")

# pygame.mixer.init()
# pygame.mixer.music.load("speechOutput.mp3")
# pygame.mixer.music.set_volume(0.7)
# pygame.mixer.music.play()


class ttsObject():
    def __init__(self):
        os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "spatial-rig-341818-3c8fae1f575e.json"
        self.client = tts.TextToSpeechClient()

    def runTTS(self):
        self.textInput = tts.SynthesisInput(text="Stormhacks 2022")

        self.setupVoice = tts.VoiceSelectionParams(language_code="en-US")
        self.audioConfig = tts.AudioConfig(
            audio_encoding=tts.AudioEncoding.MP3)

        self.speechResult = self.client.synthesize_speech(
            input=self.textInput, voice=self.setupVoice, audio_config=self.audioConfig)

        with open("speechOutput.mp3", "wb") as outputAudioFile:
            outputAudioFile.write(self.speechResult.audio_content)
            outputAudioFile.close()
            print("Audio file made.")

        # for testing, but it doesn't work yet
        pygame.mixer.init()
        pygame.mixer.music.load("speechOutput.mp3")
        pygame.mixer.music.play()


ttsObj = ttsObject()
ttsObj.runTTS()
