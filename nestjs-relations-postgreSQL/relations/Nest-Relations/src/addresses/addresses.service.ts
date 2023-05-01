import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './address.entity';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dto/create-address.dto';

@Injectable()
export class AddressesService {
  @InjectRepository(Address) addressRepo: Repository<Address>;

  getAllAdresses() {
    return this.addressRepo.find();
  }

  async getAddressById(addressId: number) {
    const address = await this.addressRepo.findOne({
      where: { id: addressId },
      relations: {
        user: true,
      },
    });

    if (!address) throw new NotFoundException('Address not found');

    return address;
  }

  async createAddress(addressData: CreateAddressDto) {
    const newAddress = this.addressRepo.create({
      city: addressData.city,
      addressLineOne: addressData.addressLineOne,
      country: addressData.country,
      user: { id: addressData.userId },
    });

    await this.addressRepo.save(newAddress);

    return newAddress;
  }
}
