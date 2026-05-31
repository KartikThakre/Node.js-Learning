import jwt = require("jsonwebtoken");

type Request = import("express").Request;
type Response = import("express").Response;
type NextFunction = import("express").NextFunction;


//? authMiddleware is a middleware function that checks for the presence of an Authorization header in the incoming request. It extracts the token from the header, verifies it using the JWT secret, and if the token is valid, it allows the request to proceed to the next middleware or route handler. If the token is missing or invalid, it responds with a 401 Unauthorized status and an appropriate error message.
function authMiddleware(
  req: Request,

  res: Response,

  next: NextFunction,
): void {
  const authHeader = req.headers.authorization;

  // Check Authorization Header
  if (!authHeader) {
    res.status(401).json({
      message: "Authorization Header Missing",
    });

    return;
  }

  // Extract Token
  const token = authHeader.split(" ")[1];

  if (!token) {
    res.status(401).json({
      message: "Token Missing",
    });
    return;
  }

  // Verify Token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    console.log(decoded);

    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid Token",
    });
  }
}

export = authMiddleware;
