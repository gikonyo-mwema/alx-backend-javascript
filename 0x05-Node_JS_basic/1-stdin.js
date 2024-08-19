// 1-stdin.js

// Display the welcome message
console.log("Welcome to Holberton School, what is your name?");

// Read user input from stdin
process.stdin.on('data', (data) => {
  // Display the user's name
  console.log(`Your name is: ${data.toString().trim()}`);

  // End the process
  process.exit();
});

// Display the closing message when the process ends
process.on('exit', () => {
  console.log("This important software is now closing");
});
