import express = require("express");
import type { Request, Response } from "express";
import type { Timesheet } from "../typescript/timesheet";

const app = express();
const port: number = Number(process.env.PORT) || 3000;

app.use(express.json());

// Validation function
//? why we use unknown instead of any ?
//? because unknown is safer than any, it forces us to do type checking before using the data, while any allows us to use the data without any checks, which can lead to runtime errors if the data is not in the expected format.
function validateTimesheet(input: unknown): Timesheet | null {
  const data = input as any;

  if (
    !data.employeeId ||
    typeof data.minutesWorked !== "number" ||
    typeof data.company !== "string" ||
    typeof data.dateofJoining !== "string" ||
    typeof data.marriageStatus !== "string"
  ) {
    return null;
  }

  return {
    employeeId: String(data.employeeId),
    minutesWorked: Number(data.minutesWorked),
    company: String(data.company),
    dateofJoining: String(data.dateofJoining),
    marriageStatus: String(data.marriageStatus),
  };
}

// Route
app.post("/validate", (req: Request, res: Response) => {
  const result = validateTimesheet(req.body);
  console.log("Validation result:", result);

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