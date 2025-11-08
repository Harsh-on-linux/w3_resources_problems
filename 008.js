import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`Guess a Number between 1 to 10`)

rl.question("Enter your number: ", function (guess) {
  const num = Math.floor(Math.random() * 10) + 1;

  if (num == guess) {
    console.log(`You win! ${num} is the correct number`);
  } else {
    console.log(`You lose! ${num} is the correct number`);
  }
  rl.close();
});
