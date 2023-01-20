import openai
import eel
import playsound
from gtts import gTTS
import wikipedia



eel.init("resource")

# Set the model and prompt
model_engine = "text-davinci-003"
dictionary=[]

class process():
        
     # Print the response
     @eel.expose
     def chatbot(api):
          dictionary.append(api)
          playsound.playsound('./resource/sakura.mp3')
          return api

     @eel.expose
     def search(comm):
          openai.api_key= dictionary[0]
          prompt = comm
          max_tokens = 128
          completion = openai.Completion.create(
               engine=model_engine,
               prompt=prompt,
               max_tokens=1024,
               temperature=0.5,
               top_p=1,
               frequency_penalty=0,
               presence_penalty=0
          )
          return completion.choices[0].text
     @eel.expose
     def readtext(readme):
          mytext = readme
          language = 'en'
          myobj = gTTS(text=mytext, lang=language, slow=False)
          myobj.save("out.mp3")
          playsound.playsound('out.mp3')

     @eel.expose
     def wikipedia(wik):
          result = wikipedia.summary(wik)
          return result

     @eel.expose
     def googled(gtext):
          kt.search(gtext)




eel.start('app.html',size = (1300,728))
#NOTE: You must install tkinter on Linux to use MouseInfo. Run the following: sudo apt-get install python3-tk python3-dev
