import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first number:", function (num1) {
  rl.question("Enter second number:", function (num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (num1 === num2) {
      console.log(num1 * 3)
    } else {
      console.log(num1 + num2)
    }
    rl.close();
  })
})
