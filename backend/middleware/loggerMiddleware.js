"use strict";
function middlewareLogger(req, res, next) {
    const timestamp = new Date().toISOString();
    const requestID = req.correlationId || "N/A";
    console.log(`[${requestID}][${timestamp}] ${req.method} ${req.url}`);
    next();
}
module.exports = middlewareLogger;
//# sourceMappingURL=loggerMiddleware.js.map