import { Router } from "express";
import { EmployeeController } from "../controllers/employee.controller.js";

export const employeeRouter = Router();
// 1. Get all employees
employeeRouter.get("/", EmployeeController.getAllEmployees);

// 2. Get employee by Id
employeeRouter.get("/:id", EmployeeController.getEmployeeByID);

// 3.Create an employe
employeeRouter.post("/", EmployeeController.createEmployee);

//   4. Update an employee
employeeRouter.patch("/:id", EmployeeController.updateEmployee);

// 5. Delete employee
employeeRouter.delete("/:id", EmployeeController.deleteEmployee);
// 6.Delete all
employeeRouter.delete("/", EmployeeController.deleteAllEmployees);
