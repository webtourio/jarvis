const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "en-US";
recognition.continuous = false;
recognition.interimResults = false;

function startListening() {
  recognition.start();
}

recognition.onstart = function () {
  subtitle.textContent = "Listening...";
};

recognition.onresult = function(event){

const transcript = event.results[0][0].transcript;

subtitle.textContent = transcript;

processCommand(transcript);

};

recognition.onerror = function (event) {

  console.log("Error:", event.error);

  subtitle.textContent = "Error: " + event.error;
};

recognition.onend = function () {

  subtitle.textContent = "Tap mic and speak";

};