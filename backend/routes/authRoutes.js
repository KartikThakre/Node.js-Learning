"use strict";
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
//? This route handler is responsible for handling user login requests. It expects an email and password in the request body. The handler performs a simple validation against hardcoded credentials (email: "
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    // Fake user validation
    if (email !== "admin@gmail.com" ||
        password !== "123456") {
        res.status(401).json({
            message: "Invalid Credentials"
        });
        return;
    }
    const token = jwt.sign({
        email: email
    }, process.env.JWT_SECRET, {
        expiresIn: "1h"
    });
    res.status(200).json({
        message: "Login Successful",
        token: token
    });
});
module.exports = router;
//# sourceMappingURL=authRoutes.js.map