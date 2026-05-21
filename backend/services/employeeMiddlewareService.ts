//? fetchEmployee simulates a database call that takes 2 seconds to complete. It returns a Promise that resolves with an employee object. You can test error handling by changing resolve to reject(new Error("Database failed")) in the setTimeout callback.
export function fetchEmployee(): Promise<object> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        employeeId: "E100",
        company: "Accenture",
        name: "John Doe"
      });

      //reject(new Error("Database failed"));

    }, 2000);
  });
}