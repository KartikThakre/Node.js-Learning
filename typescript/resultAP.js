"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = Number(process.env.PORT) || 3000;
app.use(express.json());
function validateTimesheet(input) {
    const data = input;
    if (!data.employeeId) {
        return {
            ok: false,
            errorCode: "INVALID_EMPLOYEE",
            message: "employeeId is required"
        };
    }
    if (typeof data.minutesWorked !== "number") {
        return {
            ok: false,
            errorCode: "INVALID_MINUTES",
            message: "minutesWorked must be a number"
        };
    }
    if (typeof data.company !== "string") {
        return {
            ok: false,
            errorCode: "INVALID_COMPANY",
            message: "company must be a string"
        };
    }
    if (typeof data.dateofJoining !== "string") {
        return {
            ok: false,
            errorCode: "INVALID_DATE",
            message: "dateofJoining must be a string"
        };
    }
    if (typeof data.marriageStatus !== "string") {
        return {
            ok: false,
            errorCode: "INVALID_MARRIAGE_STATUS",
            message: "marriageStatus must be a string"
        };
    }
    return {
        ok: true,
        value: {
            employeeId: String(data.employeeId),
            minutesWorked: Number(data.minutesWorked),
            company: String(data.company),
            dateofJoining: String(data.dateofJoining),
            marriageStatus: String(data.marriageStatus)
        }
    };
}
app.post("/validate", (req, res) => {
    const result = validateTimesheet(req.body);
    if (!result.ok) {
        return res.status(400).json({
            errorCode: result.errorCode,
            message: result.message
        });
    }
    return res.status(201).json(result.value);
});
// Start server
app.listen(port, () => {
    console.log(`TypeScript server running on port ${port}`);
});
//# sourceMappingURL=resultAP.js.map