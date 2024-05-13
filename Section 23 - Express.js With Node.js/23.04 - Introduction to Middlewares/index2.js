// Import the Express framework for creating web servers in Node.js
import express from "express";
// Import the Morgan middleware for logging HTTP requests
import morgan from "morgan";

// Initialize the Express application
const app = express();
// Define the port on which the server will listen for requests
const port = 3000;

// Use the Morgan middleware with the "tiny" format to log HTTP requests
app.use(morgan("tiny"));

// Set up a route to handle GET requests at the root of the server
app.get("/", (req, res) => {
  // Send the string "Hello" as a response
  res.send("Hello");
});

// Start the server and make it listen on the specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
