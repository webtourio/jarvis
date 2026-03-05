function detectIntent(command){

command = command.toLowerCase()

// TIME INTENT

if(
command.includes("time") ||
command.includes("current time") ||
command.includes("what time")
){

return "TIME_INTENT"

}

// GREETING INTENT

if(
command.includes("hello") ||
command.includes("hi") ||
command.includes("hey")
){

return "GREETING_INTENT"

}

// OPEN YOUTUBE

if(
command.includes("open youtube") ||
command.includes("go to youtube")
){

return "YOUTUBE_INTENT"

}

return "AI_INTENT"

}