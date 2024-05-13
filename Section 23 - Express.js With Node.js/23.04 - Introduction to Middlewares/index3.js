// Import the Express framework for creating web servers in Node.js
import express from "express";

// Initialize the Express application
const app = express();
// Define the port on which the server will listen for requests
const port = 3000;

// Middleware function to log information about each request received by the server
function logger(req, res, next) {
  // Log the request method (GET, POST, etc.) to the console
  console.log("Request method: ", req.method);
  // Log the request URL to the console
  console.log("Request URL: ", req.url);
  // Call the next middleware function in the chain
  next();
}

// Use the `logger` middleware for all requests received by the server
app.use(logger);

// Set up a GET route for the root of the server ("/")
app.get("/", (req, res) => {
  // Send the string "Hello" as a response to the GET request
  res.send("Hello");
});

// Start the server and make it listen on the specified port
app.listen(port, () => {
  // Display a message in the console indicating that the server is listening
  console.log(`Listening on port ${port}`);
});
