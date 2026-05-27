import express = require("express");
type Request = import("express").Request;
type Response = import("express").Response;

import asyncHandler = require("../middleware/asyncHandler");
import employeeModelService from "../services/employeeModelService";

const router = express.Router();

//CREATE Employee
router.post(
  "/employeeModal",
  asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const employee = employeeModelService.createEmployee(req.body);

    res.status(201).json({
      message: "Employee Created Successfully",
      data: employee,
    });
  }),
);

//GET All Employee

router.get(
  "/employeeModal",
  asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const emplyee = employeeModelService.getEmployees();

    res.status(200).json(emplyee);
  }),
);

//GET Employee by ID

router.get(
  "/employeeModal/:id",
  asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const employee = employeeModelService.getEmployeeById(String(req.params.id));

    if (!employee) {
      res.status(404).json({
        message: "Employee Not Found",
      });
      return;
    }

    res.status(200).json(employee);
  }),
);


//UPDATE Employee

router.put(
  "/employeeModal/:id",
  asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const updatedEmployee = employeeModelService.updateEmployee(
      String(req.params.id),
      req.body,
    );

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
  }),
);

//DELETE Employee

router.delete(
  "/employeeModal/:id",
  asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const isDeleted = employeeModelService.deleteEmployee(String(req.params.id));

    if (!isDeleted) {
      res.status(404).json({
        message: "Employee Not Found",
      });
      return;
    }

    res.status(200).json({
      message: "Employee Deleted Successfully",
    });
  }),
);

export = router;