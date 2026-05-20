"use strict";
const express = require("express");
function asyncHandler(fn) {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
}
module.exports = asyncHandler;
//# sourceMappingURL=asyncHandler.js.map