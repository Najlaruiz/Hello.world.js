// File: readFile.js
const fs = require('fs');

// Create a file named "welcome.txt" with content "Hello Node"
fs.writeFileSync('welcome.txt', 'Hello Node');

// Read and console.log data from hello.txt
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('Data read from welcome.txt:', data);
});
