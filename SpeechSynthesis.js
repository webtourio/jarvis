function speak(text){

const jarvis = new SpeechSynthesisUtterance(text);

jarvis.rate = 1;
jarvis.pitch = 1;
jarvis.volume = 1;

const core = document.querySelector(".jarvis-hud");

jarvis.onstart = () => {

if(core){
core.classList.add("speaking");
}

showSubtitles(text);

};

jarvis.onend = () => {

if(core){
core.classList.remove("speaking");
}

};

speechSynthesis.speak(jarvis);

}

function showSubtitles(text){

const subtitle = document.getElementById("subtitle");

subtitle.textContent = "";

let i = 0;

const typing = setInterval(()=>{

subtitle.textContent += text.charAt(i);

i++;

if(i >= text.length){

clearInterval(typing);

}

},30);

}