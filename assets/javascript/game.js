var wongames = 0
var lostgames = 0
var guessesLeft = 9

var listLetters = ["a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","w","x","y","z"];


var directionsText = document.getElementById("introtext");
var userChoiceText = document.getElementById("user");
var computerChoiceText = document.getElementById("system");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guesses = document.getElementById("guesses");
var guessesMade = document.getElementById("guessessofar");

function hide(){
  directionsText.textContent= "";
};

var computerChoice = listLetters[Math.floor(Math.random() * listLetters.length)];
console.log(computerChoice);


document.onkeyup = function(event) {
  var guessesMade = [];
  var userGuess = event.key;

  if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") ||
  (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p ") || (userGuess === "q") || (userGuess === "r") ||
  (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {
    if ((userGuess === "a" && computerChoice === "a") || (userGuess === "b" && computerChoice === "b") || (userGuess === "c" && computerChoice === "c") || (userGuess === "d" && computerChoice === "d") || (userGuess === "e" && computerChoice === "e") || (userGuess === "f" && computerChoice === "f") || (userGuess === "g" && computerChoice === "g") || (userGuess === "h" && computerChoice === "h") || (userGuess === "i" && computerChoice === "i") ||
    (userGuess === "j" && computerChoice === "j") || (userGuess === "k" && computerChoice === "k") || (userGuess === "l" && computerChoice === "l") || (userGuess === "m" && computerChoice === "m") || (userGuess === "n" && computerChoice === "n") || (userGuess === "o" && computerChoice === "o") || (userGuess === "p" && computerChoice === "p") || (userGuess === "q" && computerChoice === "q") || (userGuess === "r" && computerChoice === "r") ||
    (userGuess === "s" && computerChoice === "s") || (userGuess === "t" && computerChoice === "t") || (userGuess === "u" && computerChoice === "u") || (userGuess === "v" && computerChoice === "v") || (userGuess === "w" && computerChoice === "w") || (userGuess === "x" && computerChoice === "x") || (userGuess === "y" && computerChoice === "y") || (userGuess === "z" && computerChoice === "z")) {
      wongames++;
      guessesLeft = 9;
      guessesMade = [];
      computerChoice;
    }
    if (userGuess != computerChoice) {
      guessesLeft--;
      guessesMade.push(userGuess);

    } 
    if (guessesLeft === 0) {
      lostgames++;
      guessesLeft = 9; 
      guessesMade = [];
      computerChoice;
    }

    user.textContent = "You've chosen: " + userGuess;
    wins.textContent = "You've won: " + wongames + " games";
    losses.textContent = "You've lost: " + lostgames + " games";
    guesses.textContent = "You only have " + guessesLeft + " guesses left";
    guessessofar.textContent = "So far, you have guessed: " + guessesMade.join(", ");
  }
};
