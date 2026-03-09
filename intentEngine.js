function detectIntent(command){

command = command.toLowerCase()

// TIME

if(
command.includes("time") ||
command.includes("current time") ||
command.includes("what time")
){
return "TIME_INTENT"
}


// GREETING

if(
command.includes("hello") ||
command.includes("hi") ||
command.includes("hey")
){
return "GREETING_INTENT"
}


// WEBSITE COMMANDS

if(command.includes("open instagram")) return "INSTAGRAM_INTENT"
if(command.includes("open whatsapp")) return "WHATSAPP_INTENT"
if(command.includes("open facebook")) return "FACEBOOK_INTENT"
if(command.includes("open google")) return "GOOGLE_INTENT"
if(command.includes("open chatgpt")) return "CHATGPT_INTENT"
if(command.includes("open swiggy")) return "SWIGGY_INTENT"
if(command.includes("open pinterest")) return "PINTEREST_INTENT"
if(command.includes("open ola")) return "OLA_INTENT"
if(command.includes("open uber")) return "UBER_INTENT"
if(command.includes("open spotify")) return "SPOTIFY_INTENT"
if(command.includes("open youtube")) return "YOUTUBE_INTENT"

return "AI_INTENT"

}