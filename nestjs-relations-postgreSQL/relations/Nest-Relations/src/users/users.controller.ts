import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.findAllUsers();
  }
  @Get('/:id')
  getUserById(@Param('id') userId: string) {
    return this.usersService.findUserById(userId);
  }

  @Patch('/:id')
  updateUser(@Param('id') userId: string, @Body() updateData: UpdateUserDto) {
    return this.usersService.updateUser(userId, updateData);
  }

  @Delete('/:id')
  deleteUser(@Param('id') userId: string) {
    return this.usersService.removeUser(userId);
  }
}
