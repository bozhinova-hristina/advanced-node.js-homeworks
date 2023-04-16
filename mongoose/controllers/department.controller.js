import { DepartmentService } from "../services/department.service.js";

export class DepartmentController {
  // 1.Get all departments
  static async getAllDepartments(req, res) {
    try {
      const departments = await DepartmentService.getAllDepartments();

      res.json(departments);
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: error.message });
    }
  }

  // 2.Get department by ID
  static async getDepartmentById(req, res) {
    try {
      const department = await DepartmentService.getDepartmentById(
        req.params.id
      );
      res.json(department);
    } catch (error) {
      console.log(error);
      res.status(404).send({ msg: error.message });
    }
  }

  // 3.Create department

  static async createDepartment(req, res) {
    try {
      const department = await DepartmentService.createDepartment(req.body);

      res.status(201).json(department);
    } catch (error) {
      console.log(error);
      res.status(400).send({ msg: error.message });
    }
  }
}
