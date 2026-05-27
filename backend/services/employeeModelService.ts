import employees = require("../models/employeeModel");

type Employee ={
    employeeId: string;
    company: string;
    name: string;
}

//? createEmployee adds a new employee to the employees array and returns the created employee object. It takes an Employee object as input, pushes it to the employees array, and then returns the same object.
function createEmployee(employee: Employee): Employee { 
    employees.push(employee);
    return employee;
}

//? getEmployees returns the entire list of employees stored in the employees array. It simply returns the array, allowing other parts of the application to access all employee records.
function getEmployees(): Employee[] {   
    return employees; 

}
//? getEmployeeById searches for an employee in the employees array by their employeeId. It takes an employeeId as input and uses the find method to locate the first employee object that matches the provided ID. If a matching employee is found, it returns that employee object; otherwise, it returns undefined.
function getEmployeeById(employeeId: string): Employee | undefined {
    return employees.find(emp => emp.employeeId === employeeId);
}   

//? updateEmployee updates an existing employee's information based on their employeeId. It takes an employeeId and a partial Employee object containing the updated data. The function first retrieves the existing employee using getEmployeeById. If the employee exists, it merges the existing employee data with the updated data using the spread operator and updates the employees array with the new information. Finally, it returns the updated employee object. If the employee does not exist, it returns undefined.
function updateEmployee(employeeId: string, updatedData: Partial<Employee>): Employee | undefined {
    const employee = getEmployeeById(employeeId);
    
    const employeeIndex = employees.findIndex(emp => emp.employeeId === employeeId);

    if (employee && employeeIndex !== -1) {
        const updatedEmployee = { ...employee, ...updatedData };
        employees[employeeIndex] = updatedEmployee;
        return updatedEmployee;
    }
    return undefined;
}

//? deleteEmployee removes an employee from the employees array based on their employeeId. It takes an employeeId as input and uses the findIndex method to locate the index of the employee with the matching ID. If a matching employee is found, it uses the splice method to remove that employee from the array and returns true to indicate successful deletion. If no matching employee is found, it returns false.
function deleteEmployee(employeeId: string): boolean {
    const employeeIndex = employees.findIndex(emp => emp.employeeId === employeeId);

    if (employeeIndex !== -1) {
        employees.splice(employeeIndex, 1);
        return true;
    }
    return false;
}   




export = {
    createEmployee,
    getEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
}