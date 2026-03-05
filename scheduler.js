setInterval(()=>{

const now = new Date().toLocaleTimeString()

tasks.forEach(t => {

if(t.time === now){

speak("Reminder. " + t.task)

}

})

},1000)