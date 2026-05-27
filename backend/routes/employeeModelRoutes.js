"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express = require("express");
const asyncHandler = require("../middleware/asyncHandler");
const employeeModelService_1 = __importDefault(require("../services/employeeModelService"));
const router = express.Router();
//CREATE Employee
router.post("/employeeModal", asyncHandler(async (req, res) => {
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