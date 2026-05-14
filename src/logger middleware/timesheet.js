const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In Memory timesheet data
let timesheets = [];


//POST API endpoint to create a new timesheet entry
app.post('/timesheet', (req, res) => {
    const entry = req.body;
    timesheets.push(entry);

    res.status(201).json({ message: "Timesheet entry created", entry });
});

// GET API endpoint to retrieve all timesheet entries
app.get('/timesheet', (req, res) => {
    res.json(timesheets);
});

// Start the server
app.listen(port, () => {
    console.log(`Timesheet service is listening on port ${port}`);
});