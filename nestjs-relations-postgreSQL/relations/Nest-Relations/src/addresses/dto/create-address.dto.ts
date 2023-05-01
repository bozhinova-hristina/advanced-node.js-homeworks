import { IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  city: string;

  @IsString()
  country: string;

  @IsString()
  addressLineOne: string;

  @IsString()
  userId: string;
}
