import { IsString, Length, IsOptional, IsNumber, Min } from 'class-validator';

export class UpdateEmployeeDto {
  @IsString()
  @Length(6, 30)
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  timeEmployed: string;

  @IsNumber()
  @Min(5)
  @IsOptional()
  salary: number;

  @IsString()
  @IsOptional()
  department: string;
}
