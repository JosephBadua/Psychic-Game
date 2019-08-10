
var listLetters = ["a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","w","x","y","z"];

function hide(){
  directionsText.textContent= "";
  
  document.onkeyup = function(event) {
  var userGuess = event.key;

    if( listLetters.indexOf(userGuess) == -1 ){
      return;
    }
    if (userGuess === answer) {
      wongames++;
      alert("You got it right!")
      reset();
    }

    if (userGuess != answer) {
      guessesLeft--;
      guessesDone.push(userGuess);
      
    } 
    if (guessesLeft === 0) {
      lostgames++;
      alert("You lost! Try again!")
      reset();
    }
    user.textContent = "You've chosen: " + userGuess;
    wins.textContent = "You've won: " + wongames + " games";
    losses.textContent = "You've lost: " + lostgames + " games";
    guesses.textContent = "You only have " + guessesLeft + " guesse(s) left";
    guessessofar.textContent = "So far, you have guessed: " + guessesDone.join(", ");


    function reset(){
      guessesLeft = 9;
      answer = newchoice();
      guessesDone = [];
      console.log(answer);
    }
  };
};

var answer = newchoice();

function newchoice() {
  return listLetters[Math.floor(Math.random() * listLetters.length)]
}
console.log(answer);


var directionsText = document.getElementById("introtext");
var userChoiceText = document.getElementById("user");
var computerChoiceText = document.getElementById("system");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guesses = document.getElementById("guesses");
var guessesMade = document.getElementById("guessessofar");
var wongames = 0
var lostgames = 0
var guessesLeft = 9
var guessesDone = [];




