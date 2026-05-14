const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());


// Logging API endpoint
//? with this middleware, every incoming request will be logged to the console with its method, URL, and timestamp. This is useful for monitoring and debugging purposes, as it provides insight into the traffic hitting your API.
//? next() is called to pass control to the next middleware function in the stack, allowing the request to continue to be processed after logging.
app.use((req,res,next) => {
    console.log(JSON.stringify({
    method: req.method,
    url: req.url,
    time: new Date().toISOString()
  }));
  next();
})

let timesheets = [];

app.post("/validate", (req, res) => {
  const { employeeId, minutesWorked } = req.body;

  //? validations for employeeId and minutesWorked
  if (!employeeId || typeof minutesWorked !== "number") {
    return res.status(400).json({
      error: "Invalid input. employeeId required & minutesWorked must be number"
    });
  }

  const entry = { employeeId, minutesWorked };
  timesheets.push(entry);

  res.status(201).json(entry);
});

app.get("/validate", (req, res) => {
  res.json(timesheets);
});

app.listen(port, () => {
    console.log(`Validation service is listening on port ${port}`);
});