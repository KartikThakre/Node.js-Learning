type Employee = {
    employeeId: string;
    company: string;
    name: string;
};
declare function createEmployee(employee: Employee): Promise<import("mongoose").Document<unknown, {}, {
    employeeId: string;
    name: string;
    company: string;
}, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<{
    employeeId: string;
    name: string;
    company: string;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}>;
declare function getEmployees(): Promise<(import("mongoose").Document<unknown, {}, {
    employeeId: string;
    name: string;
    company: string;
}, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<{
    employeeId: string;
    name: string;
    company: string;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
})[]>;
declare function insertManyEmployees(employees: Employee[]): Promise<(import("mongoose").Document<unknown, {}, {
    employeeId: string;
    name: string;
    company: string;
}, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<{
    employeeId: string;
    name: string;
    company: string;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
})[]>;
declare function getEmployeeById(employeeId: string): Promise<(import("mongoose").Document<unknown, {}, {
    employeeId: string;
    name: string;
    company: string;
}, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<{
    employeeId: string;
    name: string;
    company: string;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}) | null>;
declare function updateEmployee(employeeId: string, updatedData: Partial<Employee>): Promise<(import("mongoose").Document<unknown, {}, {
    employeeId: string;
    name: string;
    company: string;
}, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<{
    employeeId: string;
    name: string;
    company: string;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}) | null>;
declare function deleteEmployee(employeeId: string): Promise<(import("mongoose").Document<unknown, {}, {
    employeeId: string;
    name: string;
    company: string;
}, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<{
    employeeId: string;
    name: string;
    company: string;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}) | null>;
declare const _default: {
    createEmployee: typeof createEmployee;
    getEmployees: typeof getEmployees;
    getEmployeeById: typeof getEmployeeById;
    updateEmployee: typeof updateEmployee;
    deleteEmployee: typeof deleteEmployee;
    insertManyEmployees: typeof insertManyEmployees;
};
export = _default;
//# sourceMappingURL=employeeSchemaService.d.ts.map