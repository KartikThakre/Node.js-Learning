"use strict";
const EmployeeModel = require("../models/employeeSchema");
//? This file defines a set of asynchronous functions for performing CRUD (Create, Read, Update, Delete) operations on employee records using the EmployeeModel, which is a Mongoose model representing the employee collection in the MongoDB database. Each function interacts with the database to create a new employee, retrieve all employees, get an employee by their ID, update an existing employee's information, or delete an employee based on their ID. The functions return the results of these operations, allowing other parts of the application to manage employee data effectively.
// CREATE Employee
async function createEmployee(employee) {
    return await EmployeeModel.create(employee);
}
// GET All Employees
async function getEmployees() {
    return await EmployeeModel.find();
}
// BULK CREATE Employee
async function insertManyEmployees(employees) {
    return await EmployeeModel.insertMany(employees);
}
// GET Employee By ID
async function getEmployeeById(employeeId) {
    return await EmployeeModel.findOne({
        employeeId,
    });
}
// UPDATE Employee
async function updateEmployee(employeeId, updatedData) {
    return await EmployeeModel.findOneAndUpdate({ employeeId }, updatedData, {
        new: true,
    });
}
// DELETE Employee
async function deleteEmployee(employeeId) {
    return await EmployeeModel.findOneAndDelete({
        employeeId,
    });
}
module.exports = {
    createEmployee,
    getEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee,
    insertManyEmployees,
};
//# sourceMappingURL=employeeSchemaService.js.map