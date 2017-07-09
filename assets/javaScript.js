$( document ).ready(function() {
    console.log( "ready!" );
});


var word = ["fruit",'apple','drinks', 'football', 'cat']; 
var guess;
var guessesLeft = 11;
var rightGuesses;
var computerWord = 'snake';
var guessedLetters = [''];




//word to be chosen
 function chooseWord () {
	var computerWord = word[Math.floor(Math.random() * word.length)]
  window.computerWord;
  computerWord.toString();
	console.log(computerWord);
  
};

chooseWord();



// This function is run whenever the user presses a key.
        document.onkeyup = function (event) {
        var userGuess = event.key;
        guessedLetters.push(userGuess);
        $('#guessedLetters').append(" " + userGuess);
        document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
        guessesLeft--;
       
        console.log(userGuess);
     

       
        







//

//logic


for(i = 0; i <= word.length; i++) {
  console.log(word.length);
  console.log(computerWord.length);
  document.querySelector('#rightGuesses').innerHTML = '_';



for (i = 0; i <= word.length; i++){


  for (j =0; j <= guessesLeft; j++) {
 //display the dashes for the number of letters


	if (userGuess.includes(computerWord)){
		//add letter to word
		document.querySelector('#rightGuesses').innerHTML = "" + rightGuesses;
		console.log(rightGuesses);
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
};


  

//reset the game




