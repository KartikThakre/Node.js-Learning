import express = require("express");
import errorHandler = require("./middleware/errorHandler");
import authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const employeeMiddlewareRoutes = require("./routes/employeeMiddlewareRoutes");
const loggermiddleware = require("./middleware/loggerMiddleware");
const correlationIdMiddleware = require("./middleware/correlationMiddleware");
const employeeModelRoutes = require("./routes/employeeModelRoutes");
const employeeSchemaRoutes = require("./routes/employeeSchemaRoutes");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();

//? order are important for middlewares and routes. Middlewares should be defined before the routes that use them. This ensures that the middlewares are executed for the relevant routes, allowing them to perform their intended functions such as logging, authentication, validation, and error handling effectively throughout the application.
//? orders matters in Express Applications because middlewares are executed in the order they are defined. If a middleware is defined after a route that it is supposed to affect, it will not be executed for that route, leading to unexpected behavior. For example, if you define an authentication middleware after your routes, the routes will be accessible without authentication, which can be a security risk. Therefore, it's crucial to define middlewares before the routes that rely on them to ensure they function correctly and provide the intended benefits such as logging, authentication, validation, and error handling across the application.

//? express.json() is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser. This allows us to access the data sent in the request body as req.body in our route handlers.
app.use(express.json());

// Auth Routes for user authentication and JWT token generation
app.use(authRoutes);

//? authMiddlerware for protecting routes that require authentication. By using authMiddleware, we can ensure that only authenticated users can access certain routes and perform actions that require authorization. This adds a layer of security to our application by verifying the user's identity before allowing them to access protected resources or perform sensitive operations.
app.use(authMiddleware);

// EmployeeSchemaRoutes for CRUD operations using Mongoose and MongoDB
app.use(employeeSchemaRoutes);

// EmployeeRoutes for basic CRUD operations using in-memory array
app.use(employeeRoutes);
// EmployeeMiddlewareRoutes for CRUD operations with additional middleware for validation and error handling
app.use(employeeMiddlewareRoutes);

// EmployeeModelRoutes for CRUD operations using in-memory array
app.use(employeeModelRoutes);

// Correlation ID Middleware for tracking requests across the application
app.use(correlationIdMiddleware);
// Global Logger Middleware for logging request details and correlation ID. This middleware will log the HTTP method, URL, and correlation ID for each incoming request, helping to trace the flow of requests through the application and identify any issues that may arise.
app.use(loggermiddleware);

// Error Middleware
// Global Middleware
//? errorHandler is a middleware function that catches any errors thrown in the route handlers. It logs the error and sends a 500 Internal Server Error response to the client.
app.use(errorHandler);

export = app;