// Scroll down for the solution


























// Writing to a file:
const fs = require('fs');

// File path to write
const filePath = 'file.txt';
const content = 'Content to be written into the file.';

// Writing to the file asynchronously
fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
        console.error('Error writing to the file:', err);
        return;
    }
    console.log('File has been written successfully!');
});
