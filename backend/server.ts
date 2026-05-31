
//? dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. This allows us to keep sensitive information like database credentials and API keys out of our source code and easily manage different configurations for development, testing, and production environments.
import dotenv = require("dotenv");

dotenv.config();


import app = require("./app");
//? connectDB is a function that connects to the MongoDB database. We call this function before starting the server to ensure that we have a successful connection to the database before handling any incoming requests.
import connectDB = require("./config/db");

//? here we call the connectDB function to establish a connection to the MongoDB database. This is important because our application relies on the database to store and retrieve employee data. If the connection fails, the application will log an error message and exit with a non-zero status code, preventing the server from starting without a database connection.
connectDB();



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Async server running on port ${port}`);
});




