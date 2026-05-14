const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

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