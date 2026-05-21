import express = require("express");
type Request = import("express").Request;
type Response = import("express").Response;
import { fetchEmployee } from "../services/employeeMiddlewareService";
import asyncHandler = require("../middleware/asyncHandler");




//? express.router() creates a new router object. Routers are like mini applications that can handle their own routes and middleware. This allows us to organize our code better by separating different parts of our application into different files. In this case, we can put all employee-related routes in this employeeRoutes file.
const router = express.Router();




//? here asyncHandler is used to wrap the async route handler. This allows us to write asynchronous code using async/await syntax without having to manually catch errors in each route. If an error occurs in the async function, it will be passed to the next middleware (errorHandler) automatically.
router.get(
  "/employeeService",
  asyncHandler(async (req: Request, res: Response): Promise<void> => {

    //throw new Error("Database failed");

    const employee = await fetchEmployee();
    res.json(employee);
  })
);

export = router;


