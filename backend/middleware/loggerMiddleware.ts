import { Request, Response,NextFunction } from "express";



function middlewareLogger(req: Request, res: Response, next: NextFunction): void {


    const timestamp = new Date().toISOString();

    const requestID = (req as any).correlationId || "N/A";

    console.log(`[${requestID}][${timestamp}] ${req.method} ${req.url}`);

    next();
}

export = middlewareLogger;
