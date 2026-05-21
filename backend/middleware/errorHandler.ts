
type Request = import("express").Request;
type Response = import("express").Response;
type NextFunction = import("express").NextFunction;

function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("Error:", err.message);

  res.status(500).json({
    error: "Internal Server Error"
  });
}

export = errorHandler;