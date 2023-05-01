import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';

@Controller('addresses')
export class AddressesController {
  constructor(private addressService: AddressesService) {}

  @Get()
  getAllAddresses() {
    return this.addressService.getAllAdresses();
  }

  @Get('/:id')
  getAddressById(@Param('id') addressId: string) {
    return this.addressService.getAddressById(Number(addressId));
  }

  @Post()
  createAddress(@Body() addressData: CreateAddressDto) {
    return this.addressService.createAddress(addressData);
  }
}
