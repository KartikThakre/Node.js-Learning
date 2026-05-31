"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express = require("express");
const asyncHandler = require("../middleware/asyncHandler");
const validationMiddleware_1 = __importDefault(require("../middleware/validationMiddleware"));
const employeeModelService_1 = __importDefault(require("../services/employeeModelService"));
const router = express.Router();
//CREATE Employee
//? here asyncHandler is used to wrap the async route handler. This allows us to write asynchronous code using async/await syntax without having to manually catch errors in each route. If an error occurs in the async function, it will be passed to the next middleware (errorHandler) automatically.
//? validateEmployeeMiddleware is a middleware function that validates the incoming request body for creating a new employee. It checks if the required fields are present and if they have the correct data types. If the validation fails, it sends a 400 Bad Request response to the client with the validation errors.
router.post("/employeeModal", validationMiddleware_1.default, asyncHandler(async (req, res) => {
    const employee = employeeModelService_1.default.createEmployee(req.body);
    res.status(201).json({
        message: "Employee Created Successfully",
        data: employee,
    });
}));
//GET All Employee
router.get("/employeeModal", asyncHandler(async (req, res) => {
    const emplyee = employeeModelService_1.default.getEmployees();
    res.status(200).json(emplyee);
}));
//GET Employee by ID
router.get("/employeeModal/:id", asyncHandler(async (req, res) => {
    const employee = employeeModelService_1.default.getEmployeeById(String(req.params.id));
    if (!employee) {
        res.status(404).json({
            message: "Employee Not Found",
        });
        return;
    }
    res.status(200).json(employee);
}));
//UPDATE Employee
router.put("/employeeModal/:id", asyncHandler(async (req, res) => {
    const updatedEmployee = employeeModelService_1.default.updateEmployee(String(req.params.id), req.body);
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
}));
//DELETE Employee
router.delete("/employeeModal/:id", asyncHandler(async (req, res) => {
    const isDeleted = employeeModelService_1.default.deleteEmployee(String(req.params.id));
    if (!isDeleted) {
        res.status(404).json({
            message: "Employee Not Found",
        });
        return;
    }
    res.status(200).json({
        message: "Employee Deleted Successfully",
    });
}));
module.exports = router;
//# sourceMappingURL=employeeModelRoutes.js.map