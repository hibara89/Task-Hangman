"use strict";

//creating an array with words
const words = ["programmer", "javascript", "bootcamp", "wonderland"];

// choosing random word from the array
const randomWord = words[Math.floor(Math.random() * words.length)];

// splitting the word into an array
let wordArr = randomWord.split("");

//console.log(randomWord);

//creating a new array with stars, the same length

let starArr = new Array();

for (let i = 0; i < wordArr.length; i++) {
  starArr[i] = "*";
}

//a function that checks wether it is a letter(T) or not(F)
function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

//the user receives an elegant welcome message

var figlet = require("figlet");

console.log(figlet.textSync("Welcome to the Hang Man"));

let guessNumber = 10;
//The game
while (guessNumber > 0) {
  console.log(`you have ${guessNumber} guesses,
the word is:`);

  console.log(starArr.join(""));

  var readlineSync = require("readline-sync");

  // Wait for user's response.
  var guess = readlineSync.question("what is your guess? ");

  guess = guess.toLowerCase();

  let count = 0;

  //a loop that checks wether the letter exists

  if (isLetter(guess)) {
    for (let i = 0; i < wordArr.length; i++) {
      if (wordArr[i] == guess) {
        starArr[i] = wordArr[i];

        count++;
      }
    }

    if (starArr.join("") == randomWord) {
      console.log("Congartulations!! you won ");

      break;
    }

    if (count === 0) {
      //console.log(`The letter ${guess} does not appear`);

      guessNumber--;
    } else {
      //console.log(`the letter ${guess} appears ${count} times, the word is:`);

      console.log(starArr.join(""));
    }
  } else {
    if (guess == randomWord) {
      console.log("Congartulations!! you won ");
      break;
    }
    console.log("please enter only one character ");
  }
}

if (guessNumber === 0) {
  console.log("Game Over!!");
}
