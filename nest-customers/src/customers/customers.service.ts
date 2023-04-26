import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { Customer } from './customer.entity';
import { CreateCustomerDto } from './dtos/create-customer.dto';
import { UpdateCustomerDto } from './dtos/update-customer.dto';

@Injectable()
export class CustomersService {
  @InjectRepository(Customer) private customersRepo: Repository<Customer>;

  findAllCustomers(queryData?: any) {
    const filterConfig: FindManyOptions<Customer> = {};

    if (queryData.email) {
      filterConfig.where = { ...filterConfig.where, email: queryData.email };
    }

    if (queryData.firstName) {
      filterConfig.where = {
        ...filterConfig.where,
        firstName: queryData.firstName,
      };
    }

    return this.customersRepo.find(filterConfig);
  }

  async findCustomerById(id: number) {
    const customer = await this.customersRepo.findOneBy({ id });

    if (!customer) throw new NotFoundException('Customer not found');

    return customer;
  }

  async createCustomer(customerData: CreateCustomerDto) {
    const newCustomer = this.customersRepo.create(customerData);

    await this.customersRepo.save(newCustomer);

    return newCustomer;
  }

  async updateCustomer(customerId: number, updateData: UpdateCustomerDto) {
    const customer = await this.findCustomerById(customerId);

    Object.assign(customer, updateData);
    await this.customersRepo.save(customer);
  }

  async removeCustomer(customerId: number) {
    const customer = await this.findCustomerById(customerId);
    await this.customersRepo.remove(customer);
  }
}
