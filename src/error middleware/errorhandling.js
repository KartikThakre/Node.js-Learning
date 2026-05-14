const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());


app.post("/validate", (req, res) => {
  throw new Error("Test error");
});

//? This is a global error handling middleware. It catches any errors thrown in the route handlers and sends a standardized error response to the client. This helps in maintaining consistent error responses across the application and makes it easier to debug issues by logging the error details on the server side.
app.use((err, req, res, next) => {
  console.error("Error occurred:", err.message);

  res.status(500).json({
    error: "Something went wrong"
  });
});

app.listen(port, () => {
    console.log(`Error handling service is listening on port ${port}`);
}); 



//? “Why should error middleware be last?”
//? “Because Express executes middleware in order, and error-handling middleware only catches errors from previous middleware and routes. If placed before routes, it will not handle errors properly.”