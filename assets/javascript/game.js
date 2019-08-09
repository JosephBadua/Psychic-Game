var Wins = 0
var Losses = 0
var GuessesLeft = 0

var initialText = document.getElementById("slowlyone");



var listLetters = ["a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","w","x","y","z"]

document.getElementById("button1").onclick = function() {
    
};

document.onkeyup = function(event) {

    var userGuess = event.key;

    var computerGuess = listLetters[Math.floor(Math.random() * listLetters.length)];

    if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

      if ((userGuess === "r" && computerGuess === "s") ||
        (userGuess === "s" && computerGuess === "p") || 
        (userGuess === "p" && computerGuess === "r")) {
        wins++;
      } else if (userGuess === computerGuess) {
        ties++;
      } else {
        losses++;
      }


      // Display the user and computer guesses, and wins/losses/ties.
      userChoiceText.textContent = "You chose: " + userGuess;
      computerChoiceText.textContent = "The computer chose: " + computerGuess;
      winsText.textContent = "wins: " + wins;
      lossesText.textContent = "losses: " + losses;
      tiesText.textContent = "ties: " + ties;
    }
  };