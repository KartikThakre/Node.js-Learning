type Request = import("express").Request;
type Response = import("express").Response;
type NextFunction = import("express").NextFunction;
declare function errorHandler(err: Error, req: Request, res: Response, next: NextFunction): void;
export = errorHandler;
//# sourceMappingURL=errorHandler.d.ts.map