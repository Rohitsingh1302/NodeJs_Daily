//Example of a Transform Stream(Optional) you can also modify data on the fly using Transform streams:
const fs = require('fs');
const { Transform } = require('stream');

// Create a transform stream that converts data to uppercase
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    // Convert the current chunk to uppercase
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

// Read data from input.txt, transform it, and write to output.txt
fs.createReadStream('input.txt', 'utf8')
  .pipe(upperCaseTransform)
  .pipe(fs.createWriteStream('output.txt'));

console.log('File transformed to uppercase using streams.');
// Output:
// 1. Create an input.txt file with some lowercase text.
// 2. Run this script: node uppercaserouting.js
// 3. Check output.txt to see the transformed uppercase text.