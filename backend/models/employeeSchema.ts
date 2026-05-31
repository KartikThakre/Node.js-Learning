import mongoose = require("mongoose");

//? employeeSchema is a Mongoose schema that defines the structure of the employee documents in the MongoDB database. It specifies that each employee document should have an employeeId (string, required, unique), company (string, required), and name (string, required). This schema is used to create the EmployeeModel, which provides an interface for interacting with the employee collection in the database.
const employeeSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const EmployeeModel = mongoose.model("Employee", employeeSchema);

export = EmployeeModel;
