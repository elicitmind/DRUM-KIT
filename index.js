///alert("GRAMY🥢🥢🥢🥢🥢");


const drumButton = document.querySelectorAll(".drum");

let buttonClicked;
//WYSTARCZY LOOP, BEZ FUNKCJI, ABY DODAC DO KAZDEGO .DRUM CLASS EVENT LISTENER:
for (let i = 0; i < drumButton.length; i++) {
  drumButton[i].addEventListener("click", function() {
    buttonClicked = this.innerHTML;
    playSound(buttonClicked);
    animatedButton(buttonClicked);
  })
}

document.addEventListener("keydown", function(event) {
  playSound(event.key);
  animatedButton(event.key);
})

function playSound(key) {
switch (key) {
  case "w":
    let tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
  case "a":
    let tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
  case "s":
    let tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
  case "d":
    let tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
  case "j":
    let crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;
  case "k":
    let kickbass = new Audio("sounds/kick-bass.mp3");
    kickbass.play();
    break;
  case "l":
    let snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;
  default:
    console.log(key);
}
}

function animatedButton(key) {
  document.querySelector("." + key).classList.toggle("pressed");
  setTimeout(function(){
    document.querySelector("." + key).classList.toggle("pressed");
  }, 100);
}


// document.querySelector("button").addEventListener("click", klik);

function klik() {
  alert("KLIKED");
}

// function () {
// let audio = new Audio("sounds/tom-1.mp3");
// audio.play();
// }
