import { Router } from "express";
import { DepartmentController } from "../controllers/department.controller.js";

export const departmentRouter = Router();

// 1.Get all departments
departmentRouter.get("/", DepartmentController.getAllDepartments);

// 2.Get department by ID
departmentRouter.get("/:id", DepartmentController.getDepartmentById);

// 3.Create department
departmentRouter.post("/", DepartmentController.createDepartment);
