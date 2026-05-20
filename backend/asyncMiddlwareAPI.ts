import express = require("express");
type Request = import("express").Request;
type Response = import("express").Response;

import asyncHandler = require("./asyncHandler");
import errorHandler = require("./errorHandler");

const app = express();

//? express.json() is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser. This allows us to access the data sent in the request body as req.body in our route handlers.
app.use(express.json());


//? fetchEmployee simulates a database call that takes 2 seconds to complete. It returns a Promise that resolves with an employee object. You can test error handling by changing resolve to reject(new Error("Database failed")) in the setTimeout callback.
function fetchEmployee(): Promise<object> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        employeeId: "E100",
        company: "Accenture",
        name: "John Doe"
      });

      //reject(new Error("Database failed"));

    }, 2000);
  });
}

//? here asyncHandler is used to wrap the async route handler. This allows us to write asynchronous code using async/await syntax without having to manually catch errors in each route. If an error occurs in the async function, it will be passed to the next middleware (errorHandler) automatically.
app.get(
  "/employee",
  asyncHandler(async (req: Request, res: Response): Promise<void> => {

    //throw new Error("Database failed");

    const employee = await fetchEmployee();
    res.json(employee);
  })
);

// Error Middleware
//? errorHandler is a middleware function that catches any errors thrown in the route handlers. It logs the error and sends a 500 Internal Server Error response to the client.
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running");
});