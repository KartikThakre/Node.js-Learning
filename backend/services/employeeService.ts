
// Fake database call
 export function fetchEmployee(): Promise<object> {
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

