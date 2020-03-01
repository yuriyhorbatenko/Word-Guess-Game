    var pauseGame = false

    var guessedLetters = []

    var guessingWord = []

    var wordToMatch

    var numGuess

    var wins = 0

    var possibleAnswers = ["Red", "Morpheus", "Trinity", "Zion", "Smith"]



    //var possibleQuestions = ["What pill took Neo?", "Who gave Neo's red pill?", "Who was Neo's love?", "Name a city where all people lived beside Matrix? ", "Name main Agent in Matrix"]

    

    const maxGuess = 3

    resetGame()

    
    document.onkeypress = function(event) {
        
        if (isAlpha(event.key) && !pauseGame) {
            checkForLetter(event.key.toUpperCase())
        }
    }

    
    function checkForLetter(letter) {
        
        var foundLetter = false
        var correctSound = document.createElement("audio")
        var incorrectSound = document.createElement("audio")
        //var correctPicture = document.createElement("img")
        //var incorrectPicture = document.createElement("img")

            correctSound.setAttribute("src", "assets/sound/matrix84.mp3")
            incorrectSound.setAttribute("src","assets/sound/matrix41.wav")
           //correctPicture.setAttribute("img","assets/img/giphy.gif")
           //incorrectPicture.setAttribute("img","assets/img/smDUL2.gif")
            




        
        for (var i=0, j= wordToMatch.length; i<j; i++) {
            if (letter === wordToMatch[i]) {
                guessingWord[i] = letter
                foundLetter = true
                
                
                if (guessingWord.join("") === wordToMatch) {
                    wins++
                    pauseGame = true
                    correctSound.play()
                    updateDisplay()
                    setTimeout(resetGame,3000)
                }
            }
        }
                if (!foundLetter) {
            
            
                if (!guessedLetters.includes(letter)) {
                    guessedLetters.push(letter)
                    numGuess--
                    
                }
                 
                if (numGuess === 0) {
                    guessingWord = wordToMatch.split()
                    pauseGame = true
                    incorrectSound.play()
                    setTimeout(resetGame, 4000)
                    
            }
        }
        
        updateDisplay()

    }
    
    function isAlpha (ch){
        return /^[A-Z]$/i.test(ch);
    }

    function resetGame() {
        numGuess = maxGuess
        pauseGame = false

        
        wordToMatch = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)].toUpperCase()
        console.log(wordToMatch)

        
        guessedLetters = []
        guessingWord = []

        
        for (var i=0, j=wordToMatch.length; i < j; i++){
            
            if (wordToMatch[i] === " ") {
                guessingWord.push(" ")
            } else {
                guessingWord.push("_")
            }
        }

        
        updateDisplay()
    }

    function updateDisplay () {
        document.getElementById("totalWins").innerText = wins
        document.getElementById("currentWord").innerText = guessingWord.join("")
        document.getElementById("remainingGuesses").innerText = numGuess
        document.getElementById("guessedLetters").innerText =  guessedLetters.join(" ")
    }
