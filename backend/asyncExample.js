"use strict";
//? We use a Promise in the fetchEmployee function because getting data from a database takes time—it doesn’t happen instantly. A Promise lets us write code that waits for the database to respond (either with data or an error) without stopping the rest of the program. It helps us handle things that take time, like loading data, in a clean and organized way.
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