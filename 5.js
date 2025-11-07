let str = "Hello how are you?";
let interval = 200; // milliseconds between rotations

setInterval(() => {
  // Rotate string right by one character
  str = str[str.length - 1] + str.slice(0, -1);

  // Clear the current line and print the updated string
  process.stdout.write('\r' + str);
}, interval);
