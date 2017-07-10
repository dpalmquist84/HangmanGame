$( document ).ready(function() {
    console.log( "ready!" );
});


var randomWordArr= ["fruit",'apple','drinks', 'football', 'cat']; 
var guess;
var guessesLeft = 11;
var computerWord;
var guessedLetters = [];
var correctGuesses = [];
var guesses = [];

var s;
var count = 0;
var answerArray = [];




//word to be chosen
 
	var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)]
  console.log(randomWord);


  document.onkeyup = function(event){
    var userGuess = event.key;
    guesses.push(userGuess);
    console.log(userGuess);     
    console.log(guesses);

  }     
        
for(i= 0 ; i < randomWord.length; i++){
  $('#rightGuesses').append(' _ ');
}
//reset the game
document.querySelector('button').addEventListener('click', function(){

 var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)]
  console.log(randomWord);
document.querySelector('#guessedLetters').innerHTML = "Guessed letters:";
 });





for (i = 0; i <= randomWord.length; i++){

     document.onkeyup = function (event) {
        var userGuess = event.key;
        guessedLetters.push(userGuess);
        $('#guessedLetters').append(" " + userGuess);
        document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
        
       
        console.log(userGuess);


  // for (j =0; j <= guessesLeft; j++) {
 //display the dashes for the number of letters


	if (randomWord.includes(userGuess)){
		//add letter to word
    // var right = userGuess;
		$('#rightGuesses').append(userGuess);
    correctGuesses.push(userGuess);
    console.log(correctGuesses);
    

     if (correctGuesses === randomWord);
     alert("you won the game");
		// console.log(right);
    reset();

	 } 

   //does not include?!?
   else if(randomWord){

   }

    //if you already guessed a letter
    else if (userGuess.includes(randomWord)) {
      alert('You aleady Guessed that one ');
      console.log(guessedLetters);
    }

    else {
      guessesLeft--;
      console.log(guessesLeft);
      document.querySelector('#guessedLetters').innerHTML = "Guessed Letters: " + guessedLetters;
      if (guessesLeft == 0){
        alert('Try again');
        reset();
      }
	  };
  };
};



  

//reset the game




