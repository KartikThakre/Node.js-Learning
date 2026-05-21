type Request = import("express").Request;
type Response = import("express").Response;
type NextFunction = import("express").NextFunction;
declare function asyncHandler(fn: Function): (req: Request, res: Response, next: NextFunction) => void;
export = asyncHandler;
//# sourceMappingURL=asyncHandler.d.ts.map