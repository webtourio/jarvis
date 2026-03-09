async function askJarvisAI(question){

try{

const response = await fetch("https://openrouter.ai/api/v1/chat/completions",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":"Bearer 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",
"HTTP-Referer":"http://localhost",
"X-Title":"Jarvis AI Assistant"
},

body:JSON.stringify({

model: "liquid/lfm-2-24b-a2b",

messages:[
{
role:"system",
content:"You are Jarvis, a futuristic personal AI assistant."
},
{
role:"user",
content:question
}
]

})

})

const data = await response.json()

console.log(data)

if(data.error){

speak("AI error: " + data.error.message)
return

}

const answer = data.choices[0].message.content

speak(answer)

}
catch(error){

console.error(error)

speak("I cannot connect to my AI brain right now.")

}

}











