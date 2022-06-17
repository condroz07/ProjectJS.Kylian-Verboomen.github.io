document.getElementById("myButton").onclick = function () {
  location.href = "./page2.html";
};
document.getElementById("myButton2").onclick = function () {
  location.href = "../../index.html";
};

function fontchange(n) {
  var paragraph = document.getElementById("para");
  paragraph.style.fontSize = n + "px";
}

var buttons = document.querySelector(".buttons");
var button = buttons.querySelectorAll(".button");

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    document.getElementById("para").style.backgroundColor = "antiquewhite";
    this.className += " active";
  });
}
function fontfamily() {
  var paragraph = document.getElementById("para");
  paragraph.style.fontFamily = "Arial";
}

function btnReset() {
  document.getElementById("para").style.backgroundColor = "white";
  document.getElementById("para").style.fontFamily = "Cambria";
}
