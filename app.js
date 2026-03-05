const micBtn = document.getElementById("micBtn");
const subtitle = document.getElementById("subtitle");

micBtn.addEventListener("click", () => {

micBtn.classList.add("listening");

startListening();

});