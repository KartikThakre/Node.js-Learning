import { Request, Response,NextFunction } from "express";


let requestCounter = 0;

function correlationMiddleware(req: Request, res: Response, next: NextFunction): void {
    requestCounter++;
    const correlationId = `req-${requestCounter}`;

    //? we can attach the correlation ID to the request object so that it can be accessed in subsequent middleware and route handlers. This allows us to track the flow of a specific request through our application.
    (req as any).correlationId = correlationId;

    console.log(`Correlation ID: ${correlationId} - ${req.method} ${req.url}`);

    next();
}

export = correlationMiddleware;