export type Result<T> = {
    ok: true;
    value: T;
} | {
    ok: false;
    errorCode: string;
    message: string;
};
//# sourceMappingURL=result.d.ts.map