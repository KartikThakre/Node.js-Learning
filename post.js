const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
//? We use app.use(express.json()); to automatically parse incoming JSON request bodies, so you can easily access data sent in POST requests as req.body. This is essential for APIs that receive JSON data
app.use(express.json());

// GET API endpoint
app.get('/health', (req, res) => {
  res.json({ status: "ok" });
});

//POST API endpoint
app.post('/data', (req, res) => {
  const data = req.body;
  console.log('Received data:', data);
  res.json({ message: "Data received", receivedData: data });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});