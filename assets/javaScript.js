


var word = ["fruit",'apple','drinks', 'football', 'cat']; 
var guess;
var guessesLeft = 11;
var rightGuesses;
var computerWord;
var guessedLetters = [''];



//word to be chosen
 function chooseWord () {
	var computerWord = word[Math.floor(Math.random() * word.length)];
	console.log(computerWord);
  return computerWord;
};

chooseWord();



// This function is run whenever the user presses a key.
        document.onkeyup = function (event) {
        var userGuess = event.key;
        guessedLetters.push(userGuess);
        document.querySelector('#guessedLetters').innerHTML = "Guessed letters: " + userGuess;
        document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
        guessesLeft--;
        return userGuess;
        

        // console.log(computerWord);
        // console.log(guessesLeft);
        logic();
      };
        





//display the dashes for the number of letters

//

//logic

function logic(){
for(i = 0; i <= word.length; i++) {
  document.querySelector('#rightGuesses').text = '_';
};


for (i = 0; i <= word.length; i++){


  for (j =0; j <= guessesLeft; j++) {

	if (userGuess === indexOf.computerWord){
		//add letter to word
		document.querySelector('#rightGuesses').innerHTML = "" + rightGuesses;
		console.log(guess);
	 }

    //if you already guessed a letter
    else if (userGuess === guessedLetters) {
      alert('You aleady Guessed that one ');
      console.log(guessedLetters);
    }

    else {
      guessesLeft--;
      console.log(guessesLeft);
      document.querySelector('#guessedLetters').innerHTML = "Guessed Letters: " + guessedLetters;
	  };
  };
};
};

	
  

//reset the game




