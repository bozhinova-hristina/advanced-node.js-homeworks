import { EmployeeService } from "../services/employee.service.js";

export class EmployeeController {
  // 1. Get all employees
  static async getAllEmployees(req, res) {
    try {
      const employees = await EmployeeService.getAllEmployees();

      res.json(employees);
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: error.message });
    }
  }

  // 2. Get employee by Id
  static async getEmployeeByID(req, res) {
    try {
      const employee = await EmployeeService.getEmployeeByID(req.params.id);

      res.json(employee);
    } catch (error) {
      console.log(error);
      res.status(404).send({ msg: error.message });
    }
  }

  // 3.Create an employee
  static async createEmployee(req, res) {
    try {
      const employee = await EmployeeService.createEmployee(req.body);

      res.status(201).json(employee);
    } catch (error) {
      console.log(error);
      res.status(400).send({ msg: error.message });
    }
  }

  //   4. Update an employee
  static async updateEmployee(req, res) {
    try {
      const updateEmployee = await EmployeeService.updateEmployee(
        req.params.id,
        req.body
      );
      res.json(updateEmployee);
    } catch (error) {
      console.log(error);
      res.status(400).send({ msg: error.message });
    }
  }

  // 5.Delete employee
  static async deleteEmployee(req, res) {
    try {
      await EmployeeService.deleteEmployee(req.params.id);

      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(404).send({ msg: error.message });
    }
  }

  // 6.Delete all
  static async deleteAllEmployees(req, res) {
    try {
      await EmployeeService.deleteAllEmployees();

      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: error.message });
    }
  }
}
