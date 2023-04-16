import { Employee } from "../models/employee.model.js";

export class EmployeeService {
  // 1. Get all employees

  static async getAllEmployees() {
    const employees = await Employee.find({}).setOptions({
      sanitizeFilter: true,
    });
    return employees;
  }

  // 2. Get employee by Id
  static async getEmployeeByID(employeeId) {
    const employee = await Employee.findById(employeeId);
    if (!employee) throw new Error("Employee not found");

    return employee;
  }

  // 3.Create an employee
  static async createEmployee(employeeData) {
    if (employeeData._id) throw new Error("Invalid Data");
    const newEmployee = new Employee(employeeData);

    const createdEmployee = await newEmployee.save();

    console.log("Save response", createdEmployee);

    return createdEmployee;
  }

  //   4. Update an employee
  static async updateEmployee(employeeId, updateData) {
    const employee = await this.getEmployeeByID(employeeId);
    if (updateData._id) throw new Error("Invalid data");

    Object.assign(employee, updateData);

    const response = await employee.save();
    console.log("Update respomse", response);
    return response;
  }

  // 5.Delete an employee
  static async deleteEmployee(employeeId) {
    const response = await Employee.findByIdAndDelete(employeeId);

    if (!response) throw new Error("Employee not found");
    console.log(response);
  }

  // 6.Delete all
  static async deleteAllEmployees() {
    const response = await Employee.deleteMany({});
    console.log(response);
  }
}
