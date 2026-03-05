function processCommand(command){

command = command.toLowerCase()

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


// Unknown command → ask AI
default:

askJarvisAI(command)

}

}

