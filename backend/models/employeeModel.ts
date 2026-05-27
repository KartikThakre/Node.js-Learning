type Employee ={
    employeeId: string;
    company: string;
    name: string;
}

//? This file defines an Employee type and an array to store employee records. The Employee type has three properties: employeeId, company, and name, all of which are strings. The employees array is initialized as an empty array and is intended to hold objects that conform to the Employee type. This array can be used to store and manage employee data within the application.
//? Temporary Database to store the employee records in memory storage.
const employee: Employee[] = [];
  

export = employee;  