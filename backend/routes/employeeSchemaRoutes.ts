
import express = require("express");
type Request = import("express").Request;
type Response = import("express").Response;

// authMiddleware is a middleware function that checks for the presence of an Authorization header in the incoming request. It extracts the token from the header, verifies it using the JWT secret, and if the token is valid, it allows the request to proceed to the next middleware or route handler. If the token is missing or invalid, it responds with a 401 Unauthorized status and an appropriate error message.
import authMiddleware = require("../middleware/authMiddleware");
import asyncHandler = require("../middleware/asyncHandler");
import validateEmployeeMiddleware = require("../middleware/validationMiddleware");
import EmployeeModelService = require("../models/employeeSchema");

const router = express.Router();

//CREATE Employee
//? here asyncHandler is used to wrap the async route handler. This allows us to write asynchronous code using async/await syntax without having to manually catch errors in each route. If an error occurs in the async function, it will be passed to the next middleware (errorHandler) automatically.
//? validateEmployeeMiddleware is a middleware function that validates the incoming request body for creating a new employee. It checks if the required fields are present and if they have the correct data types. If the validation fails, it sends a 400 Bad Request response to the client with the validation errors.

//? EmployeeModelService is a Mongoose model that provides an interface for interacting with the employee collection in the MongoDB database. It allows us to perform CRUD operations on employee records, such as creating a new employee, retrieving all employees, getting an employee by their ID, updating an existing employee's information, or deleting an employee based on their ID. In this route handler, we use EmployeeModelService.create to create a new employee record in the database using the data from the request body.
router.post(
  "/employeeModal",validateEmployeeMiddleware,
  asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const employee = await EmployeeModelService.create(req.body);

    res.status(201).json({
      message: "Employee Created Successfully",
      data: employee,
    });
  }),
);

//GET All Employee
//? why we use authMiddleware in this route? authMiddleware is used in this route to protect the endpoint and ensure that only authenticated users can access the list of employees. By including authMiddleware, we check for a valid JWT token in the Authorization header of the incoming request. If the token is valid, the request is allowed to proceed to the route handler, which retrieves and returns the list of employees from the database. If the token is missing or invalid, the authMiddleware will respond with a 401 Unauthorized status, preventing unauthorized access to the employee data. This adds a layer of security to our application by ensuring that only authenticated users can access sensitive information about employees.
router.get(
  "/employeeModal",authMiddleware,
  asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const employee = await EmployeeModelService.find();
    console.log(employee);
    res.status(200).json(employee);
  }),
);


// BULK CREATE Employee
router.post(
  "/employeeModal/bulk",
  asyncHandler(async (req: Request, res: Response): Promise<void> => {
    // EmployeeModelService.insertMany is a Mongoose method that allows us to insert multiple employee records into the database at once.
    const employees = await EmployeeModelService.insertMany(req.body);
    res.status(201).json({
      message: "Bulk Employees Created Successfully",
      data: employees,
    });
  }),
);

module.exports = router;



//GET Employee by ID

router.get(
  "/employeeModal/:id",
  asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const employee = await EmployeeModelService.findOne({ employeeId: String(req.params.id) });

    if (!employee) {
      res.status(404).json({
        message: "Employee Not Found",
      });
      return;
    }

    res.status(200).json(employee);
  }),
);


//UPDATE Employee

router.put(
  "/employeeModal/:id",
  asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const updatedEmployee = await EmployeeModelService.findOneAndUpdate(
      { employeeId: String(req.params.id) },
      req.body,
      { new: true },    
    );

    if (!updatedEmployee) {
      res.status(404).json({
        message: "Employee Not Found",
      });
      return;
    }

    res.status(200).json({
      message: "Employee Updated Successfully",
      data: updatedEmployee,
    });
  }),
);

//DELETE Employee

router.delete(
  "/employeeModal/:id",
  asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const isDeleted = await EmployeeModelService.findOneAndDelete({ employeeId: String(req.params.id) });

    if (!isDeleted) {
      res.status(404).json({
        message: "Employee Not Found",
      });
      return;
    }

    res.status(200).json({
      message: "Employee Deleted Successfully",
    });
  }),
);

