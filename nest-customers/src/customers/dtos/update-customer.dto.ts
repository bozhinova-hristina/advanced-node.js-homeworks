import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class UpdateCustomerDto {
  @IsOptional()
  @IsString()
  @Length(3, 30)
  firstName: string;
  @IsOptional()
  @IsString()
  @Length(3, 30)
  lastName: string;
  @IsOptional()
  @IsEmail()
  email: string;
  @IsOptional()
  @IsString()
  phone: string;
  @IsOptional()
  @IsString()
  address: string;
  @IsOptional()
  @IsString()
  city: string;
}
