import express = require("express");
type Request = import("express").Request;
type Response = import("express").Response;
import { fetchEmployee } from "../services/employeeService";




//? express.router() creates a new router object. Routers are like mini applications that can handle their own routes and middleware. This allows us to organize our code better by separating different parts of our application into different files. In this case, we can put all employee-related routes in this employeeRoutes file.
const router = express.Router();


// Async route
router.get("/employee", async (req: Request, res: Response) => {
  try {
    console.log("Fetching employee...");

    const employee = await fetchEmployee();

    res.status(200).json(employee);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to fetch employee"
    });
  }
});


export = router;