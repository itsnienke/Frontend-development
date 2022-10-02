// JavaScript Document
console.log("hi");

var deButton = document.querySelector("nav ul:first-of-type li button");
var menuFold = document.querySelector("nav ul:nth-of-type(2)");
var gameMenu = document.querySelector("nav ul:nth-of-type(2) li:first-of-type");
var gameSubMenu = document.querySelector("nav ul:nth-of-type(2) li:first-of-type ul");



deButton.addEventListener("click", toggleMenu);
gameMenu.addEventListener("click", toggleGameMenu);




function toggleMenu() {
    console.log("check");
    menuFold.classList.toggle('toonMenu');
    
}


function toggleGameMenu() {
    console.log("check");
    gameSubMenu.classList.toggle('toonSubMenu');
    
}

let button1 = document.querySelector(".abilities div button:first-of-type");
let button2 = document.querySelector(".abilities div button:nth-of-type(2)");
let button3 = document.querySelector(".abilities div button:nth-of-type(3)");
let button4 = document.querySelector(".abilities div button:nth-of-type(4)");
let list1 = document.querySelector(".abilities ul li:first-of-type");
let list2 = document.querySelector(".abilities ul li:nth-of-type(2)");
let list3 = document.querySelector(".abilities ul li:nth-of-type(3)");
let list4 = document.querySelector(".abilities ul li:nth-of-type(4)");
let video = document.querySelector(".abilities video");

list1.classList.add("active");

button1.addEventListener("click", selected1);
button2.addEventListener("click", selected2);
button3.addEventListener("click", selected3);
button4.addEventListener("click", selected4);

function selected1() {
  list1.classList.add("active");
  video.src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4f4fdcc86da69972/5ecad872722d20585b2f4a44/Sage_Q_v001_web.mp4";
  
  if(list2.classList.contains("active")) {
    list2.classList.remove("active");
  } else if(list3.classList.contains("active")) {
    list3.classList.remove("active");
  } else if(list4.classList.contains("active")) {
    list4.classList.remove("active");
  } else {
    console.log("werkt niet");
  }
}

function selected2() {
  list2.classList.add("active"); 
  video.src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf1d16edc36ba3386/5ecad87152c5395e0f2dd0ea/Sage_E_v001_web.mp4";
  
  if(list1.classList.contains("active")) {
    list1.classList.remove("active");
  } else if(list3.classList.contains("active")) {
    list3.classList.remove("active");
  } else if(list4.classList.contains("active")) {
    list4.classList.remove("active");
  } else {
    console.log("werkt niet");
  }
}

function selected3() {
  list3.classList.add("active");
  video.src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5a0edb670c30fbdc/5ecad8732f5c725928765507/Sage_C_v001_web.mp4";
  
  if(list1.classList.contains("active")) {
    list1.classList.remove("active");
  } else if(list2.classList.contains("active")) {
    list2.classList.remove("active");
  } else if(list4.classList.contains("active")) {
    list4.classList.remove("active");
  } else {
    console.log("werkt niet");
  }
}

function selected4() {
  list4.classList.add("active");
  video.src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltef1820f276fbaa0c/5ecad871957e405e09905755/Sage_X_v001_web.mp4";
  
  if(list1.classList.contains("active")) {
    list1.classList.remove("active");
  } else if(list2.classList.contains("active")) {
    list2.classList.remove("active");
  } else if(list3.classList.contains("active")) {
    list3.classList.remove("active");
  } else {
    console.log("werkt niet");
  }
}


// window.addEventListener("keydown", handleKeydown);

// function handleKeydown(event) {
//   if (event.key == "Escape") {
//     menuFold.classList.remove("toonMenu");
//   }
// }