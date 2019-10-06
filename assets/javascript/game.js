/*
Bugs Life
-Alert solving after word**
  -You win! screen pops up too early. Pops up right before game ends but has been won (how i write it vs better)
-Disable any key that's not a letter*
-Only allow points for new correct letters***
-Don't allow points for repeat keys**
  -Reset game after loss screen
*/

//Varuables and Array list
var wordList = ["africa", "antartica", "asia", "austrailia", "europe", "northamerica", "southamerica"];
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(randomWord); // Test: reveals randomly selected word
var numberOfGuesses = 15;
var wrongGuesses = [];
var underscore = [];
var wins = 0;

var remainingGuesses = document.querySelector('.remaining-guesses');
var correctLetters = document.querySelector('.correct-letters');
var wrongLetters = document.querySelector('.wrong-letters');

// Placeholder equal to number of characters in word for player to see
function placeholder() {
  for(var i = 0; i < randomWord.length; i++) {
    underscore.push('_');
  };
  return underscore;
};
var answer = placeholder();
console.log(answer); // Test: Underscore lines to replace word characters

// Key input to keep track of player inputs
document.onkeyup = function(e) {

  var playerGuess = e.key;
  
  // Conditional to test player guess vs the random word selected
  if (randomWord.includes(playerGuess) === true) {
    // randomWord.includes(playerGuess)
    // console.log(randomWord.includes(playerGuess));
    for( var o = 0; o < randomWord.length; o++) {
      if (randomWord[o] === playerGuess) {
        wins++;
        underscore[o] = playerGuess;
        correctLetters.textContent = underscore.join(' ');
        if (wins === randomWord.length) {
          alert('You Win!');
        };
        console.log(underscore); // Test - clogreen the 
      };
    };
  } else {
    wrongGuesses.push(playerGuess);
    numberOfGuesses--;
    console.log('Wrong letter! ' + wrongGuesses, numberOfGuesses); // Test
    wrongLetters.textContent = wrongGuesses.join(', ');
    remainingGuesses.textContent = numberOfGuesses;
    // Once number of guess hits zero, player loses game
    if (numberOfGuesses === 0) {
      alert('You Lost!');
      console.log('You lost!');
    };
  };
};
