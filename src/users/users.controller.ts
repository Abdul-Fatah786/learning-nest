/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable prettier/prettier */
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
import { UsersService } from './users.service';

@Controller('users') // /users
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() // /users / ?role
  getAllUsers(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.getAllUsers(role);
  }

  @Get(':id') // /users/:id
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(+id); // Convert id to number
  }

  @Post() // /users
  createUser(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.usersService.createUser(user);
  }

  @Patch(':id') // /users/:id
  updateUser(
    @Param('id') id: string,
    @Body()
    updateUser: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.usersService.updateUser(+id, updateUser);
  }

  @Delete(':id') // /users/:id
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(+id); // Convert id to number
  }
}
