"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchEmployee = fetchEmployee;
// Fake database call
function fetchEmployee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                employeeId: "E100",
                company: "Accenture"
            });
            //reject(new Error("Database failed"));
            // try changing resolve → reject(new Error("Database failed"))
        }, 2000);
    });
}
;
//# sourceMappingURL=employeeService.js.map