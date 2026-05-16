import express, { Request, Response } from "express";
import type { Timesheet } from "../typescript/timesheet";

const app = express();
const port: number = Number(process.env.PORT) || 3000;

app.use(express.json());

// Validation function
function validateTimesheet(input: unknown): Timesheet | null {
  const data = input as any;

  if (
    !data.employeeId ||
    typeof data.minutesWorked !== "number"
  ) {
    return null;
  }

  return {
    employeeId: String(data.employeeId),
    minutesWorked: Number(data.minutesWorked)
  };
}

// Route
app.post("/validate", (req: Request, res: Response) => {
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