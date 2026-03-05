function speak(text){

const jarvis = new SpeechSynthesisUtterance(text);

jarvis.rate = 1;
jarvis.pitch = 1;
jarvis.volume = 1;

const core = document.querySelector(".jarvis-core");

jarvis.onstart = () => {

core.classList.add("speaking");

showSubtitles(text);

};

jarvis.onend = () => {

core.classList.remove("speaking");

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

function speak(text){

const jarvis = new SpeechSynthesisUtterance(text);

jarvis.rate = 1;
jarvis.pitch = 1;

jarvis.onstart = () => {

document.body.classList.add("speaking")

showSubtitles(text)

}

jarvis.onend = () => {

document.body.classList.remove("speaking")

}

speechSynthesis.speak(jarvis)

}