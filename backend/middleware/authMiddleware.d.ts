type Request = import("express").Request;
type Response = import("express").Response;
type NextFunction = import("express").NextFunction;
declare function authMiddleware(req: Request, res: Response, next: NextFunction): void;
export = authMiddleware;
//# sourceMappingURL=authMiddleware.d.ts.map