// Imports the 'express' module to create an Express application.
import express from "express";
// Initializes the Express application.
const app = express();
// Defines the port on which the server will listen for connections.
const port = 3000;

// Starts the Express server to listen for connections on the specified port.
app.listen(port, () => {
    // When the server is ready to accept connections, prints a message indicating the port it's running on.
    console.log(`Server running on port ${port}.`);
});

// Defines a route handler for the root URL ("/") that responds with an HTML heading saying "Hello".
app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
});

// Defines a route handler for the "/contact" URL that responds with an HTML heading containing an email address.
app.get("/contact", (req, res) => {
    res.send("<h1>vitorwesley1013b@gmail.com</h1>");
});

// Defines a route handler for the "/about" URL that responds with an HTML heading containing the creator's name.
app.get("/about", (req, res) => {
    res.send("<h1>My name is Wesley Victor</h1>");
});
