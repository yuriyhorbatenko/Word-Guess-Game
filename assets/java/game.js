

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
var answeredQuestions = []
var guessingWord = []
var wordToMatch
var numGuess
var wins = 0

document.onkeypress = function(event) {
    if (isAlpha(event.key) && !pauseGame) {
        checkForLetter(event.key.toUpperCase())
    }
}

function isAlpha (ch) {
    return /^[A-Z]$/i.test(ch);}



    function checkForLetter(letter) {

    var foundLetter = false
    var correctSound = document.createElement("audio")
    var incorrectSound = document.createElement("audio")

    correctSound.setAttribute("src", "assets/sounds")
    incorrectSound.setAttribute("src","assets/sounds")

 for (var i=0, j= wordToMatch.length; i<j; i++) {
    if (letter === wordToMatch[i]) {
        guessingWord[i] = letter;
        foundLetter = true;
        correctSound.play();
    }
        
        if (guessingWord.join("") === wordToMatch) {
            
            wins++;
            pauseGame = true;
            updateDisplay();
            setTimeout(resetGame,5000);
        }
    }    
 }       
    

    if (!foundLetter) {
        incorrectSound.play()
    
    if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter)
        numGuess--
    }
    if (numGuess === 0) {
        guessingWord = wordToMatch.split()
        pauseGame = true
        setTimeout(resetGame, 5000)
    }
}
