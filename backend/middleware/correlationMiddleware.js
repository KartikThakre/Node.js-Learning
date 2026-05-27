"use strict";
let requestCounter = 0;
function correlationMiddleware(req, res, next) {
    requestCounter++;
    const correlationId = `req-${requestCounter}`;
    //? we can attach the correlation ID to the request object so that it can be accessed in subsequent middleware and route handlers. This allows us to track the flow of a specific request through our application.
    req.correlationId = correlationId;
    console.log(`Correlation ID: ${correlationId} - ${req.method} ${req.url}`);
    next();
}
module.exports = correlationMiddleware;
//# sourceMappingURL=correlationMiddleware.js.map