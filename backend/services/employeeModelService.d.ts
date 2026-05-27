type Employee = {
    employeeId: string;
    company: string;
    name: string;
};
declare function createEmployee(employee: Employee): Employee;
declare function getEmployees(): Employee[];
declare function getEmployeeById(employeeId: string): Employee | undefined;
declare function updateEmployee(employeeId: string, updatedData: Partial<Employee>): Employee | undefined;
declare function deleteEmployee(employeeId: string): boolean;
declare const _default: {
    createEmployee: typeof createEmployee;
    getEmployees: typeof getEmployees;
    getEmployeeById: typeof getEmployeeById;
    updateEmployee: typeof updateEmployee;
    deleteEmployee: typeof deleteEmployee;
};
export = _default;
//# sourceMappingURL=employeeModelService.d.ts.map