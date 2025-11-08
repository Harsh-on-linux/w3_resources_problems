
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(
  "Enter 1 to convert from Celsius to Fahrenheit\nEnter 2 to convert from Fahrenheit to Celsius: ",
  (type) => {
    const choice = Number(type);

    if (choice === 1) {
      rl.question("Enter temperature in Celsius: ", (celsius) => {
        const c = Number(celsius);
        console.log(`In Celsius: ${c} °C\nIn Fahrenheit: ${c * 1.8 + 32} °F`);
        rl.close();
      });
    } else if (choice === 2) {
      rl.question("Enter temperature in Fahrenheit: ", (fahrenheit) => {
        const f = Number(fahrenheit);
        console.log(`In Fahrenheit: ${f} °F\nIn Celsius: ${(f - 32) / 1.8} °C`);
        rl.close();
      });
    } else {
      console.log("Invalid option. Please run the program again.");
      rl.close();
    }
  }
);

