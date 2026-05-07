console.log("Backend service started 🚀");

// This is a simple backend service that listens on a specified port and responds to requests.

//const port = process.env.PORT || 3000;



const port = Number(process.env.PORT) || 3000;

console.log(
  JSON.stringify({
    level: "info",
    message: "Backend service running",
    port: port,
    timestamp: new Date().toISOString()
  })
);

console.log(`Backend service running on port ${port} 🚀`);