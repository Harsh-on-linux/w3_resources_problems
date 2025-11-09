
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`Enter two numbers`);

rl.question("Enter first number: ", function (num1) {
  rl.question("Enter second number: ", function (num2) {
    console.log(`To Multiply these numbers type 1\nTo Divide these numbers type 2`);

    rl.question("Enter your choice: ", function (choice) {
      if (choice == 1) {
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
      } else if (choice == 2) {
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
      } else {
        console.log("Invalid choice!");
      }

      rl.close();
    });
  });
});

