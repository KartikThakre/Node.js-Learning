import mongoose = require("mongoose");
declare const EmployeeModel: mongoose.Model<{
    employeeId: string;
    name: string;
    company: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    employeeId: string;
    name: string;
    company: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    employeeId: string;
    name: string;
    company: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    employeeId: string;
    name: string;
    company: string;
}, mongoose.Document<unknown, {}, {
    employeeId: string;
    name: string;
    company: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    employeeId: string;
    name: string;
    company: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    employeeId: string;
    name: string;
    company: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    employeeId: string;
    name: string;
    company: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export = EmployeeModel;
//# sourceMappingURL=employeeSchema.d.ts.map