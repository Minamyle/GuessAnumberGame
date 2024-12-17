const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startGame() {
  console.clear();
  console.log(" Welcome to the Number Guessing Game! ");
  console.log("I will pick a random number within a range, and you have to guess it.");

  const min = 5;
  const max = 50;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  let attempts = 0;

  console.log(` I have selected a number between ${min} and ${max}. Try to guess it!`);

  function askGuess() {
    rl.question("Enter your guess: ", (input) => {
      const guess = parseInt(input, 10); 
      attempts++;

      
      if (isNaN(guess) || guess < min || guess > max) {
        console.log(` Invalid input! Please enter a number between ${min} and ${max}.`);
        return askGuess();
      }

      
      if (guess === randomNumber) {
        console.log(` Congratulations! You guessed the correct number ${randomNumber} in ${attempts} attempts.`);
        return playAgain();
      } else if (guess > randomNumber) {
        console.log(" Too high! Try again.");
      } else {
        console.log(" Too low! Try again.");
      }

      askGuess(); 
    });
  }

  askGuess();

  function playAgain() {
    rl.question(" Do you want to play again? (yes/no): ", (answer) => {
      if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
        startGame(); 
      } else {
        console.log("Thanks for playing! Goodbye.");
        rl.close();
      }
    });
  }
}


startGame();
