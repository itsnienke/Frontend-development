// JavaScript Document
console.log("hi");

var deButton = document.querySelector("nav button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    var deNav = document.querySelector("nav");
    deNav.classList.toggle("toonMenu");
}

window.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
}