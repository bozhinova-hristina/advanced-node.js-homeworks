import { Router } from "express";
import { employeeRouter } from "../routes/employee.routes.js";
import { departmentRouter } from "../routes/department.routes.js";
export const globalRouter = Router();

globalRouter.use("/employees", employeeRouter);
globalRouter.use("/departments", departmentRouter);
