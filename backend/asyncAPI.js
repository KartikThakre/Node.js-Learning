"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
// Fake database call
function fetchEmployee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                employeeId: "E100",
                company: "Accenture"
            });
            //reject(new Error("Database failed"));
            // try changing resolve → reject(new Error("Database failed"))
        }, 2000);
    });
}
// Async route
app.get("/employee", async (req, res) => {
    try {
        console.log("Fetching employee...");
        const employee = await fetchEmployee();
        res.status(200).json(employee);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Failed to fetch employee"
        });
    }
});
app.listen(port, () => {
    console.log(`Async server running on port ${port}`);
});
//# sourceMappingURL=asyncAPI.js.map