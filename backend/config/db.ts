import mongoose = require("mongoose");

//? connectDB is an asynchronous function that connects to the MongoDB database using Mongoose. It uses a try-catch block to handle any errors that may occur during the connection process. If the connection is successful, it logs "MongoDB Connected". If the connection fails, it logs "MongoDB Connection Failed" and exits the process with a non-zero status code.
async function connectDB(): Promise<void> {

  try {

    //? mongoose.connect() is used to connect to the MongoDB database. The connection string "mongodb://
    //? employeesDB" specifies that we want to connect to a MongoDB instance running on the local machine 
    await mongoose.connect("mongodb://127.0.0.1:27017/employeesDB");

    console.log("MongoDB Connected");

  } catch (error) {

    console.error("MongoDB Connection Failed");

    process.exit(1);
  }
}

export = connectDB;