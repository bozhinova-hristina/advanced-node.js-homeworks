import { Department } from "../models/department.model.js";

export class DepartmentService {
  // 1.Get all departments
  static async getAllDepartments() {
    return Department.find({});
  }

  // 2.Get department by id
  static async getDepartmentById(departmentId) {
    const department = Department.findById(departmentId)
      .populate("employees")
      .populate("manager");
    if (!department) throw new Error("Department not found");

    return department;
  }

  // 3.Create department
  static async createDepartment(departmentData) {
    if (departmentData._id) throw new Error("Invalid data");

    const newDepartment = new Department(departmentData);
    const createdDepartment = await newDepartment.save();

    return createdDepartment;
  }
}
