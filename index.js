contactButton = document.querySelector("#contact button");

contactButton.addEventListener("click", function contactClickhandler(el) {
  window.open("https://wa.me/972542181312","_self")
});

function showExtraStuff() {
  document.getElementById('extrastuff').style.display = "block";
}

function exit() {
  alert("You should consider your answer again in the next time")
  document.getElementById('container').style.display = "none";

}
