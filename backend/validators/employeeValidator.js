"use strict";
function validateEmployee(data) {
    return (typeof data.employeeId === "string" &&
        typeof data.company === "string" &&
        typeof data.name === "string");
}
module.exports = validateEmployee;
//# sourceMappingURL=employeeValidator.js.map