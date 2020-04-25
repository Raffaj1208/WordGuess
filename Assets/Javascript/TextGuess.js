//Here we created an Array of letters you can guess
var letters = ["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k"];

// Here is another array for the letters you guess, it has no properties yet, those will be assigned when the user guesses
var guessedLetters = [];

// Null is used to empty an object, here we are creating a variable and giving it no value 
var letterToGuess = null;

// Here we create the variable that is going to hold the amount of guesses allow-able
var guessesLeft = 9;

// These variable were created to hold the value of the amount of wins and losses, this will be assigned as the game goes and resets
var wins = 0;
var losses = 0;

// The variable created below is a function that will update the variable GuessesLeft
var updateGuessesLeft = function() {
 
  //This states that we are grabbing the elemnt called #guesses-left and telling it to display what is in the variable guessesLeft in the HTML file
  document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

//This is a function expression that stores the function in the variable
 var updateLetterToGuess = function() {
  // The functions use is to give the variable that is null a value at random from chosen from the letters Array
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

// In this variable we will store a function that prints text in the designated element on in the html file
var updateGuessesSoFar = function() {
 
// This statement grabs the designated element from the html file and tells it to print,
// The guessedLetter variable is what will print, since it is empty the .join action will make it print what the user guessed
  document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
};

// This variable was created with a function to reset the value of the variables to its original value
var reset = function() {
  // This states that the value of the guessesLeft variabke will be 9 upon reset
  guessesLeft = 9;
 // This states that this array will be empty once more upon reset
  guessedLetters = [];
 // These statements call on the functions stored in the variables mentioned
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
};

// These variables are being called to activate the functions they hold
updateLetterToGuess();
updateGuessesLeft();

// Here we give the onkeydown the value of a function that is going to return an event
// When the event happens the function will run
document.onkeydown = function(event) {
  // In the event that a key is pressed the amount of guesses user has left will decrease
  guessesLeft--;

  // Here we create a variable, the value given to this variable in the event of a keypress will be printed lowercase
  var letter = event.key.toLowerCase();

  // Here when the event happens and the function is run
  // The guessedLetters Array will append a child from the letter variable 
  guessedLetters.push(letter);

  // Here the functions stored inside the variables are being called to run
  updateGuessesLeft();
  updateGuessesSoFar();


  // Within the scope of the keypress event, if the letter that the user guessed is of the same value and type as the one in the Array
  if (letter === letterToGuess) {

    // Then the wins variable will be add 1
    wins++;
    
    // Here we grab an element and tell that element to display the current value of the variable 'wins'
    document.querySelector("#wins").innerHTML = wins;

    // This calls on the reset function stored in the mentioned variable
    reset();
  }

  // Outside of the local scope of the keypress event, but within the global scope
 // We say that if the value in the guessesLeft reaches a point where it is of same type and value of 0
  if (guessesLeft === 0) {

    // Then the losses variable will add 1
    losses++;
    
    // Here we grab the html element 'losses' and tell it to display the value stored in the losses variable
    document.querySelector("#losses").innerHTML = losses;

    // Calling the function stored in the reset variable
    reset();
  }
};
