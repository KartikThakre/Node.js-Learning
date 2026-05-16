"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = Number(process.env.PORT) || 3000;
app.use(express.json());
// Validation function
function validateTimesheet(input) {
    const data = input;
    if (!data.employeeId ||
        typeof data.minutesWorked !== "number") {
        return null;
    }
    return {
        employeeId: String(data.employeeId),
        minutesWorked: Number(data.minutesWorked)
    };
}
// API Route
app.post("/validate", (req, res) => {
    const result = validateTimesheet(req.body);
    if (!result) {
        return res.status(400).json({
            error: "Invalid timesheet data"
        });
    }
    return res.status(201).json(result);
});
// Start server
app.listen(port, () => {
    console.log(`TypeScript server running on port ${port}`);
});
//# sourceMappingURL=timesheetAP.js.map