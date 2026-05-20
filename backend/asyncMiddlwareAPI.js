"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const asyncHandler = require("./asyncHandler");
const errorHandler = require("./errorHandler");
const app = express();
app.use(express.json());
function fetchEmployee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                employeeId: "E100",
                company: "Accenture",
                name: "John Doe"
            });
            //reject(new Error("Database failed"));
            // try changing resolve → reject(new Error("Database failed"))
        }, 2000);
    });
}
app.get("/employee", asyncHandler(async (req, res) => {
    //throw new Error("Database failed");
    const employee = await fetchEmployee();
    res.json(employee);
}));
app.use(errorHandler);
app.listen(3000, () => {
    console.log("Server running");
});
//# sourceMappingURL=asyncMiddlwareAPI.js.map