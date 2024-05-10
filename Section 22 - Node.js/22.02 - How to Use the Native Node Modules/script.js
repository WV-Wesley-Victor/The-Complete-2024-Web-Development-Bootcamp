// Import the 'fs' (File System) module from Node.js to handle file system operations.
const fs = require("fs");

// Write a file named "message.txt" with the content "Hello World".
// The callback function is called when the operation is completed or an error occurs.
fs.writeFile("message.txt", "Hello Wolrd", (err) => {
    // Check if there's any error. If so, throw an exception.
    if (err) throw err;
    // If there are no errors, log a message indicating that the file has been saved successfully.
    console.log("The file has been saved!");
});

// Read the file "message.txt" with encoding "utf8" (Unicode-friendly 8-bit character encoding).
// The callback function is called when the reading is completed or an error occurs.
fs.readFile("./message.txt", "utf8", (err, data) => {
    // Check if there's any error. If so, throw an exception.
    if (err) throw err;
    // If there are no errors, log the content of the read file.
    console.log(data);
});
