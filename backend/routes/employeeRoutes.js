"use strict";
const express = require("express");
const employeeService_1 = require("../services/employeeService");
//? express.router() creates a new router object. Routers are like mini applications that can handle their own routes and middleware. This allows us to organize our code better by separating different parts of our application into different files. In this case, we can put all employee-related routes in this employeeRoutes file.
const router = express.Router();
// Async route
router.get("/employee", async (req, res) => {
    try {
        console.log("Fetching employee...");
        const employee = await (0, employeeService_1.fetchEmployee)();
        res.status(200).json(employee);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Failed to fetch employee"
        });
    }
});
module.exports = router;
//# sourceMappingURL=employeeRoutes.js.map