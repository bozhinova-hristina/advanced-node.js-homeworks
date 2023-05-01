import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @Length(2, 20)
  firstName: string;

  @IsOptional()
  @IsString()
  @Length(2, 20)
  lastName: string;

  @IsOptional()
  @IsNumber()
  @Min(18)
  age: number;
}
