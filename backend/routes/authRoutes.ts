import express = require("express");

type Request = import("express").Request;
type Response = import("express").Response;

import jwt = require("jsonwebtoken");

const router = express.Router();

//? This route handler is responsible for handling user login requests. It expects an email and password in the request body. The handler performs a simple validation against hardcoded credentials (email: "
router.post(
  "/login",

  (req: Request, res: Response) => {

    const { email, password } = req.body;

    // Fake user validation
    if (
      email !== "admin@gmail.com" ||
      password !== "123456"
    ) {

      res.status(401).json({
        message: "Invalid Credentials"
      });

      return;
    }

    const token = jwt.sign(

      {
        email: email
      },

      process.env.JWT_SECRET as string,

      {
        expiresIn: "1h"
      }
    );

    res.status(200).json({
      message: "Login Successful",
      token: token
    });
  }
);

export = router;