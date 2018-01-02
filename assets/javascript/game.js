//set up variables for hangman game

var words = ["head", "shoulders", "knees", "toes", "elbows", "legs",
			"arms", "feet", "hands", "fingers", "nose", "eyes", "ears",
			"mouth"];
var answerArray = [];
var templateArray = [];
var remainingGuesses = 8;
var lettersGuessed = [];
var winner = false;
var loser = false;
			
// random select a word to play

function hangmanGame() {
	answerArray = [];
	var word = words[Math.floor(Math.random() * words.length)];

	for (var w = 0; w < word.length; w++) {
		answerArray.push(word.charAt(w));
		
	}

// add selected word to array in new div

	var targetDiv = document.getElementById("word");

	for (var i = 0; i < answerArray.length; i++) {
		var currentLetter = answerArray[i];
		var newDiv = document.createElement("div");
		newDiv.innerHTML = "_"
		targetDiv.appendChild(newDiv);
		newDiv.setAttribute("class", "letterDiv");
	}

  }
//game setup
hangmanGame();

//to run for each key press
document.onkeyup = function(event) {

	//var userGuess = getElementByClassName("letter").innerHTML = addClass(".letter-disabled");
	//console.log(userGuess);

	// pick up key and move to either used letters or word
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// alert if letter has already been used
	var isUsed = lettersGuessed.indexOf(userGuess);

	if (isUsed >= 0) {
		alert("that letter has already been picked");
		return;
	} else {

	}

	// builds out guessed letters and pushes to html section
	lettersGuessed.push(userGuess);
	var newLetterDiv = document.getElementById("lettersGuessed");
	newLetterDiv.innerHTML = "<div>"+lettersGuessed+"</div>";

	// check to see if entry is part of current word selctions
	var isPartOfWord = answerArray.indexOf(userGuess);

	// checks the letter to see if it appears more than once in the array
	var answerWordDivs = document.getElementsByClassName("letterDiv");

	var count = 0;

		for (var i = 0; i < answerArray.length; i++) {
			if (answerArray[i] === userGuess) {
				count++;
				answerWordDivs[i].innerHTML = answerArray[i];
			}
		}

		//checks that letter is part of the array and reduces count of remaining guesses
		if(isPartOfWord >= 0) {
			for (var i = 0; i < count; i++) {

			}
		} else {
			remainingGuesses--;
			var remainGuessDiv = document.getElementById("remainingGuesses");
			remainGuessDiv.innerHTML = "<p>"+remainingGuesses+"</p>";

		// I want to also change the image based on the remaining guesses to show the series of hangman images.  Not working

			// var remainingPartsDiv = document.getElementById("hangman-frame");
		 // 	remainingPartsDiv.innerHTML = "<img class=\"hangman\" src=\"assets/images/"+remainingGuesses+".jpg>";
		}


// I can't get this working.  I want the game to end, i'm missing something.		
	if (remainingGuesses === 0) {
		winner = true;
		gameOver = true;
		} 

	if (remainingGuesses < 0) {
		loser = true;
		gameOver = true;
		}
		

		// while (remainingGuesses >= 0) {
		// 	var remainingPartsDiv = document.getElementById("hangman-frame");
		// 	remainingPartsDiv.innerHTML = "<img class=\"hangman\" src=\"assets/images/"+remainingGuesses+".jpg>";
		// }

	//resets the game at game over		
	if (winner === true && gameOver === true) {
		lettersGuessed = [];
		var newLetterDiv = document.getElementById("lettersGuessed");
		var newResetDiv = document.getElementById("word");
		newResetDiv.innerHTML = " ";
		var newResetRemainingDiv = document.getElementById("remainingGuesses");
		hangmanGame();
		remainingGuesses = 8;
		winner = false;
		alert("Congratulations, you guessed the word "+word+"!!")
	
	} else if (loser === true && gameOver === true) {
		lettersGuessed = [];
		var newLetterDv = document.getElementById("lettersGuessed");
		newLetterDiv.innerHTML = "<p>"+lettersGuessed+"</p>";
		hangmanGame();
		remainingGuesses = 8;
		loser = false;
		alert("Sorry, you lost, the word is "+word+".")

	}
	else {
	}
	
}
console.log(answerArray.join(" "));


