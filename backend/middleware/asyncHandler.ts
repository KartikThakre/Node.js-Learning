
type Request = import("express").Request;
type Response = import("express").Response;
type NextFunction = import("express").NextFunction;

function asyncHandler(
  fn: Function
) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

export = asyncHandler;