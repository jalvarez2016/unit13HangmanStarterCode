//On the lines below define four variables secretWord, guesses, misses, and images
// Set secretWord equal to null
// Set correctGuesses equal to an empty array
// Set wrongGuesses equal to an empty array
// Set images to an array contataining all of your images links as strings (in order)
/*global $*/
var secretWord = null;
var wrongGuesses = [];
var correctGuesses =[];
var images = [
"images/Hangman-1.png",
"images/Hangman-2.png",
"images/Hangman-3.png",
"images/Hangman-4.png",
"images/Hangman-5.png",
"images/Hangman-6.png"
]





// in the prepareGame() function below
// set correctGuesses to an empty array
// set wrongGuesses to an empty array
// call the drawWord() function
// call the drawHangman() function
function prepareGame() {
  secretWord = ['D',"O","G"];
  var wrongGuesses = [];
  var correctGuesses =[];
  drawWord();
  drawHangman();

}



// in this onWin() function below 
// 1. alert "You won!"
function onWin() {
  $("#body").alert("You won!");
  
}

// in this onLose() function below 
// 1. alert "You lost!"
function onLose() {
  $("#body").alert("You Killed A Man!");
  
  
}

// in this checkIfWon() function below
// 1. Declare a variable hasAll and set equal to true
// 2. For each letter in secretWord 
//    a. if correctGuesses does not include the letter (!) set variable hasAll to false
// 3. return hasAll
function checkIfWon() {  
  var hasAll = true;
  secretWord.forEach(function(letter) {
    $("letter").append(letter);
    if (!correctGuesses.contains(letter)){
      hasAll = false;
    }
  });
   
    return hasAll;
  
  
  
  
  
}

// in this checkIfLost() function below
// 1. declare a variable misses and set it equal to the length of wrongGuesses array
// 2. if misses is less than 6 return false else return true
function checkIfLost() {
  var misses = wrongGuesses().length;
  if ( misses < 6 ){
      return false;
  } else 
      return true;
  
  
  
}

// in the onCorrectGuess() function below
// 1. add the the letter variable to the array correctGuesses
// 2. call the drawWord function
// 3. if the checkIfWon() is returns true call the onWin() function 
function onCorrectGuess(letter) {
    correctGuesses + letter;
    drawWord();
    if (checkIfWon() == true) {
        onWin();
    }
  
  
  
}

// in the onWrongGuess() function below
// 1. add the the letter variable to the array wrongGuesses
// 2. call the drawHangman function
// 3. if the checkIfLost() function returns true call the onLose() function 
function onWrongGuess(letter) {
    wrongGuesses + letter;
    drawHangman();
    if (checkIfLost() == true) {
        onLose();
    }
  
  
  
  
}

// in the judgeGuess function below
// 1. if the letter is included in secretWord, call the onCorrectGuess(letter) function
//    otherwise call onWrongGuess(letter) function
function judgeGuess(letter) {
  if (secretWord.contains(letter)) {
      onCorrectGuess(letter);
  } else {
      onWrongGuess(letter);
  }
  
  
  
  
}

// in the drawWord function below
// 1. empty the div tag with the id "word"
// 2. For each letter in secretWord 
//    if correctGuesses includes letter append the letter
//    othewise append and underscore
function drawWord() {
  $("#word").html("");
    secretWord.forEach(function(letter) {
    $("letter").append(letter);
    if (correctGuesses.inArray(letter)){
      $("word").append(letter);
    }else{
      $("#word").append("_");
    }
    
  });
   
    
  
  
  
  
  

  
  
  
  
}

// in the drawHangman function below
// 1. define a variable misses equal to the length of wrongGuesses
// 2. change the src of the img tag with the id hangman 
//    to the correct image url based on the number of misses
function drawHangman() {
  var misses = wrongGuesses.length;
  
    $("#hangman").attr("src","images/Hangman-" + misses + ".png");
    

  
  
}

// in the onKeyDown function below
// 1. define a variable letter and set it equal to the correct letter
// 2. set letter equal to the upperCase of itself
// 3. call the judgeGuess function with letter as an parameter

function onKeyDown(event) {
  var letter = event.char;
  letter= letter.toUpperCase();
  judgeGuess(letter);
  
}

// Call the prepare game function
// Initialize a jQuery keydown event handler 
//       (Keydown function should take onKeyDown function as an argument)
$(document).ready(function() {
  prepareGame();
 $("input").keydown(onKeyDown)
 
  
});
