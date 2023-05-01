import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UsersService {
  @InjectRepository(User) private usersRepo: Repository<User>;

  findAllUsers() {
    return this.usersRepo.find();
  }

  async findUserById(userId: string) {
    const user = await this.usersRepo.findOne({
      where: { id: userId },
      relations: {
        orders: true,
        address: true,
      },
    });

    if (!user) throw new NotFoundException('User not uuid');

    return user;
  }

  async findUserByEmail(email: string) {
    const user = await this.usersRepo.findOneBy({ email });

    // If we throw an error anywhere in the execution of methods the logic with termiante, so in this case we either return a user or we return null
    // if (!user) throw new NotFoundException();

    return user;
  }

  async createUser(userData: CreateUserDto) {
    const newUser = this.usersRepo.create(userData);

    await this.usersRepo.save(newUser);

    return newUser;
  }

  async updateUser(userId: string, updateData: UpdateUserDto) {
    const user = await this.findUserById(userId);

    Object.assign(user, updateData);
    await this.usersRepo.save(user);
  }

  async removeUser(userId: string) {
    const user = await this.findUserById(userId);

    await this.usersRepo.remove(user);
  }
}
