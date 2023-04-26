import { IsEmail, IsString, Length } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @Length(3, 30)
  firstName: string;
  @IsString()
  @Length(3, 30)
  lastName: string;
  @IsEmail()
  email: string;
  @IsString()
  phone: string;
  @IsString()
  address: string;
  @IsString()
  city: string;
}
