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
