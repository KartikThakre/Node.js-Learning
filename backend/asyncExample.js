"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fetchEmployee() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Employee data received");
        }, 5000);
    });
}
async function getData() {
    console.log("Fetching employee data...");
    //? what happen if we remove await here and just call fetchEmployee() without await, it will return a Promise object instead of the resolved value. The console.log will print the Promise object instead of the actual employee data.
    const result = await fetchEmployee();
    console.log(result);
}
getData();
//# sourceMappingURL=asyncExample.js.map