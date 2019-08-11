
// zorg dat het reageert op een klik op de eerste button:
//document.querySelector("button").addEventListener("click", handleClick); // je gebruikt alleen de naam van de functie (zonder de ()) omdat je niet wil dat de functie meteen uitgevoerd wordt als de eventListener is added. De functie moet pas uitgevoerd worden als de eerste button wordt aangeklikt. Dat bereik je door alleen de naam van de functie als input te geven. 

// function handleClick(){
//   alert("I got clicked!");
// }

// je zult ook vaak zien dat ipv hoe het bovenstaand wordt gedaan, een anonieme functie wordt gebruikt:
// document.querySelectorAll("button").addEventListener("click", function(){
//   alert("I got clicked!");
// });

// alle buttons selecteren:
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
//   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//     alert("I got clicked!");
//   });
// }

// DETECTING BUTTON PRESS
var numberOfDrumButtons = document.querySelectorAll(".drum").length; // to declare the number of times the for loop has to run.

for (var i = 0; i < numberOfDrumButtons; i++) { // looping trough all the buttons one by one. 

  document.querySelectorAll(".drum")[i].addEventListener("click", function() { // add eventListener once user clicks on a button. Once the user clicks, run function() this function calls the methods below.

    var buttonInnerHTML = this.innerHTML; // this. refers to the identity of the button that triggered the eventListener. 

    makeSound(buttonInnerHTML); // pass in the key

    buttonAnimation(buttonInnerHTML); // pas in the currentKey

  });
}

// add the sounds also if key with the letter of a button is pressed: not only when it gets clicked. But how to add eventListeners to the keyboard? You can just add the addEventlistener to the entire document. When a key got pressed, the element will trigger the function. When that function gots triggered, there is also the option to pass in a parameter. We can call it (event or e). It lets us tap into the event that triggered the EventListnener. 

// DETECTING KEYBOARD PRESS
document.addEventListener("keydown", function(event) {
  // event is actually an object with a lot of properties. When the key is pressed down the function gets called. And this function is a callback function. It will give back all the properties which belongs to this event object that was created by pressing down a certain key. But we only need to know which key was pressed and pass this trough to the functions makeSound and buttonAnimation. So thats why event.key gives the key that triggered the event. 
  makeSound(event.key); // the event.key tells us which key on the keyboard was pressed. 

  buttonAnimation(event.key); // pas in currentKey

});

function makeSound(key) { // the button gives buttonInnerHTML as key, de keydown gives event.key as key

  switch (key) { // switch instead of if. switch (expression). expression is the thing that we're going to switch on. 
    case "W":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play(); // tom1. needed so it knows it has to play tom1. etc.
      break;

    case "A":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "S":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "D":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "J":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "K":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "L":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default: console.log(key); // kind of the else statement. What if someone clicks or pressed a letter thats not defined? just console.log the key thats pressed/clicked.
  }
}


function buttonAnimation(currentKey) { // could make up the name of the input parameter

  var activeButton = document.querySelector("." + currentKey); // each of the buttons have a classname called drum but also a classname of the letter thats written on that button. So that is a unique classname for every button. activebutton = the className of that unique letter. 

  activeButton.classList.add("pressed");

  setTimeout(function() { // first parameter is the function that will be executed.
    activeButton.classList.remove("pressed");
  }, 100); // is the second parameter. 100 is 0.1 second. This defines how long it has to wait before running this function. If you dont specify this, it will get its default value 0. 
}
