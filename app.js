const micBtn = document.getElementById("micBtn");
const subtitle = document.getElementById("subtitle");

micBtn.addEventListener("click", () => {

micBtn.classList.add("listening");

startListening();

});

if("serviceWorker" in navigator){

navigator.serviceWorker.register("service-worker.js")
.then(()=>console.log("Service Worker Registered"))

}