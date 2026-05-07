// This is a simple Node.js backend service using Express. It listens on a specified port and responds to requests with a greeting message.
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// This is a simple backend service that listens on a specified port and responds to requests.
app.get('/', (req, res) => {
  res.send('Hello from the backend service!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Backend service is listening on port ${port}`);
}); 