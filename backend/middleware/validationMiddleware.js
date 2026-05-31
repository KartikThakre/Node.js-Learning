"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
//? employeeValidator is a function that validates the employee data sent in the request body. It checks if the required fields (employeeId, company, name) are present and of the correct type. If the validation fails, it sends a 400 Bad Request response to the client with an error message. If the validation passes, it calls next() to pass control to the next middleware or route handler.
const employeeValidator_1 = __importDefault(require("../validators/employeeValidator"));
function validateEmployeeMiddleware(req, res, next) {
    //? here we call the validateEmployee function to perform the actual validation. This keeps our middleware function clean and focused on handling the request and response, while the validation logic is encapsulated in a separate function that can be reused across different routes if needed.
    //? reusable validation logic is a good practice as it promotes code modularity and maintainability. By separating the validation logic into its own function, we can easily update or enhance the validation rules without having to modify the middleware function itself. This also allows us to reuse the same validation logic in multiple routes if needed, ensuring consistency across our application.
    const isValid = (0, employeeValidator_1.default)(req.body);
    if (!isValid) {
        res.status(400).json({
            message: "Invalid employee data"
        });
        return;
    }
    next();
    //? the commented code below is an example of how you might implement the validation logic directly in the middleware. However, it's generally better to separate this logic into a dedicated validator function (like validateEmployee) for better code organization and reusability.
    //   const { employeeId, company, name } = req.body;
    //   if (
    //     typeof employeeId !== "string" ||
    //     typeof company !== "string" ||
    //     typeof name !== "string"
    //   ) {
    //     res.status(400).json({
    //       message: "Invalid employee data"
    //     });
    //     return;
    //   }
    //   next();
}
module.exports = validateEmployeeMiddleware;
//# sourceMappingURL=validationMiddleware.js.map