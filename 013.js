import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter variable name: ", (varName) => {
  const content = `const ${varName} = 42;\n`;
  fs.appendFileSync('013test.js', content);
  console.log(`Added ${varName} to variables.js`);
  rl.close();
});

