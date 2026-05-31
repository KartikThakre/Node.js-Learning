function validateEmployee(data: any): boolean {

  return (
    typeof data.employeeId === "string" &&
    typeof data.company === "string" &&
    typeof data.name === "string"
  );
}

export = validateEmployee;