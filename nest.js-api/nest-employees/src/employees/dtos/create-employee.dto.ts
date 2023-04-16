import { IsNumber, IsString, Length } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @Length(6, 30)
  name: string;

  @IsString()
  timeEmployed: string;

  @IsNumber()
  salary: number;

  @IsString()
  department: string;
}
