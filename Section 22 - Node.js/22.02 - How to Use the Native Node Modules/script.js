// The FS (File System) is a module in Node.js used to manipulate files and directories in the computer's file system. It allows reading, writing, creating, deleting, and manipulating files and directories synchronously or asynchronously. It's essential for Node.js applications that need to handle file storage and manipulation.
// Writing to a file:
const fs = require("fs");

// File path to write
const filePath = "file.txt";
const content = "Content to be written into the file.";

// Writing to the file asynchronously
fs.writeFile(filePath, content, "utf8", (err) => {
    if (err) {
        console.error("Error writing to the file:", err);
        return;
    }
    console.log("File has been written successfully!");
});

// // Reading a file:
// const fs = require("fs");

// // File path to read
// const filePath = "file.txt";

// // Reading the file asynchronously
// fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//         console.error("Error reading the file:", err);
//         return;
//     }
//     console.log("File content:", data);
// });

// // Deleting a file:
// const fs = require("fs");

// // File path to delete
// const filePath = "file.txt";

// // Deleting the file asynchronously
// fs.unlink(filePath, (err) => {
//     if (err) {
//         console.error("Error deleting the file:", err);
//         return;
//     }
//     console.log("File deleted successfully!");
// });

// // Checking file existence:
// const fs = require("fs");

// // File path to check
// const filePath = "file.txt";

// // Checking file existence
// fs.access(filePath, fs.constants.F_OK, (err) => {
//     if (err) {
//         console.error("The file does not exist.");
//         return;
//     }
//     console.log("The file exists.");
// });
