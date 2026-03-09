function processCommand(command){

// normalize command
command = command.toLowerCase()

// remove wake word
command = command.replace("jarvis","").trim()


// remember user's name
if(command.includes("my name is")){

const name = command.replace("my name is","").trim()

saveMemory("username", name)

speak("Nice to meet you " + name)

return

}


// tell user their saved name
if(command.includes("what is my name")){

const name = getMemory("username")

if(name){

speak("Your name is " + name)

}else{

speak("I do not know your name yet")

}

return

}


// detect intent
const intent = detectIntent(command)

console.log("Detected intent:", intent)


switch(intent){

case "GREETING_INTENT":

greetingSkill()
break


case "TIME_INTENT":

timeSkill()
break


case "YOUTUBE_INTENT":

openWebsite("https://youtube.com")
break

case "INSTAGRAM_INTENT":
openWebsite("https://instagram.com")
break

case "WHATSAPP_INTENT":
openWebsite("https://web.whatsapp.com")
break

case "FACEBOOK_INTENT":
openWebsite("https://facebook.com")
break

case "GOOGLE_INTENT":
openWebsite("https://google.com")
break

case "CHATGPT_INTENT":
openWebsite("https://chat.openai.com")
break

case "SWIGGY_INTENT":
openWebsite("https://swiggy.com")
break

case "PINTEREST_INTENT":
openWebsite("https://pinterest.com")
break

case "OLA_INTENT":
openWebsite("https://ola.com")
break

case "UBER_INTENT":
openWebsite("https://uber.com")
break

case "SPOTIFY_INTENT":
openWebsite("https://spotify.com")
break

case "YOUTUBE_INTENT":
openWebsite("https://youtube.com")
break
// fallback to AI
default:

askJarvisAI(command)

}

}