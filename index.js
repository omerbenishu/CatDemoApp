contactButton = document.querySelector("#contact button");

contactButton.addEventListener("click", function contactClickhandler(el) {
  window.open("https://wa.me/972542181312","_self")
});

function showExtraStuff() {
  document.getElementById('extrastuff').style.display = "block"

}

function hideAll() {
  alert("You should consider your answer again in the next time")
  document.getElementById('container').style.display = "none";

}
function rolling(){
  var deg = 180
  var curDeg = document.getElementById("container").style.transform
  if (curDeg.includes("180")){
    deg = 0
  }
  document.getElementById("container").style.transform = "rotate(" + deg + "deg)";
}

function swifty(){
  var randomColor = getRandomColor()
  document.getElementById("body").style.backgroundColor = randomColor;
  document.body.style.color = invertColor(randomColor);

}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function invertColor(hex) {
  if (hex.indexOf('#') === 0) {
      hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
      throw new Error('Invalid HEX color.');
  }
  // invert color components
  var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
      g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
      b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
  // pad each with zeros and return
  return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
  len = len || 2;
  var zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
}
