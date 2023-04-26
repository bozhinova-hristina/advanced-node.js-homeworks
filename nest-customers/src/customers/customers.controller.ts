import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dtos/create-customer.dto';
import { UpdateCustomerDto } from './dtos/update-customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  getAllCustomers(
    // @Query('email') email: string,
    // @Query('firstName') firstName: string,
    @Query() queryData: any,
  ) {
    return this.customersService.findAllCustomers(queryData);
  }

  @Get('/:id')
  getCustomerById(@Param('id') customerId: string) {
    return this.customersService.findCustomerById(Number(customerId));
  }

  @Post()
  createCustomer(@Body() customerData: CreateCustomerDto) {
    return this.customersService.createCustomer(customerData);
  }

  @Patch('/:id')
  updateCustomer(
    @Param('id') customerId: string,
    @Body() updateData: UpdateCustomerDto,
  ) {
    return this.customersService.updateCustomer(Number(customerId), updateData);
  }

  @Delete('/:id')
  deleteCustomer(@Param('id') customerId: string) {
    return this.customersService.removeCustomer(Number(customerId));
  }
}
