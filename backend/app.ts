import express = require("express");
import errorHandler from "./middleware/errorHandler";
const employeeRoutes = require("./routes/employeeRoutes");
const employeeMiddlewareRoutes = require("./routes/employeeMiddlewareRoutes");

const app = express();

//? express.json() is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser. This allows us to access the data sent in the request body as req.body in our route handlers.
app.use(express.json());

app.use(employeeRoutes);
app.use(employeeMiddlewareRoutes);

// Error Middleware
// Global Middleware
//? errorHandler is a middleware function that catches any errors thrown in the route handlers. It logs the error and sends a 500 Internal Server Error response to the client.
app.use(errorHandler);

export = app;