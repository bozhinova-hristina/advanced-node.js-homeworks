import { Injectable, NotFoundException } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { Employee } from './interfaces/employee.interface';
import { CreateEmployeeDto } from './dtos/create-employee.dto';
import { v4 as uuid } from 'uuid';
import { UpdateEmployeeDto } from './dtos/update-employee.dto';
import { log } from 'console';

const employeePath = join(
  process.cwd(),
  'src',
  'employees',
  'data',
  'employees.json',
);

@Injectable()
export class EmployeesService {
  async getAllEmployees(): Promise<Employee[]> {
    const employeesJson = await readFile(employeePath, 'utf-8');
    console.log(employeesJson);

    return JSON.parse(employeesJson);
  }

  async saveEmployees(employees: Employee[]) {
    await writeFile(employeePath, JSON.stringify(employees, null, 2));
  }

  async getEmployeeById(employeeId: string) {
    const employees = await this.getAllEmployees();

    const foundEmployee = employees.find(
      (employee) => employee.id === employeeId,
    );
    if (!foundEmployee) throw new NotFoundException('Employee not found');
    return foundEmployee;
  }

  async createEmployee(employeeData: CreateEmployeeDto) {
    const employees = await this.getAllEmployees();

    const newEmployee: Employee = {
      ...employeeData,
      id: uuid(),
    };

    employees.push(newEmployee);
    await this.saveEmployees(employees);

    return newEmployee;
  }
  async updateEmployee(employeeId: string, updateData: UpdateEmployeeDto) {
    console.log('From update employee method', updateData);
    const employees = await this.getAllEmployees();

    const foundEmployee = await this.getEmployeeById(employeeId);

    Object.assign(foundEmployee, updateData);

    const updatedEmployees = employees.map((employee) =>
      employee.id === foundEmployee.id ? foundEmployee : employee,
    );
    await this.saveEmployees(updatedEmployees);
  }
}
