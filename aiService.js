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











