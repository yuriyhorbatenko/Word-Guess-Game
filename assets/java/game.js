

var questions = [
    { q: "What pill took Neo?", a: "Red" },
    { q: "Who gave Neo s red pill?", a: "Morpheus" },
    { q: "Who was Neo's love?", a: "Trinity" },
    { q: "Name a city where all people lived beside Matrix? ", a: "Zion" },
    { q: "Name main Agent in Matrix", a: "Smith" }
  ];
  console.log(questions)

const maxGuess = 3
var pauseGame = false

var guessedLetters = []
var guessingWord = []
var wordToMatch
var numGuess
var wins = 0

document.onkeypress = function(event) {
    if (isAlpha(event.key) && !pauseGame) {
        checkForLetter(event.key.toUpperCase())
    }
}

function isAlpha (ch){
    return /^[A-Z]$/i.test(ch);
}