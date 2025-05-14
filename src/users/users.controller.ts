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

@Controller('users') // /users
export class UsersController {
  /*
    GET /users
    GET /users/:id
    POST /users
    PUT /users/:id
    PATCH /users/:id
    */

  @Get() // /users / ?role
  getAllUsers(@Query('role') role: "Intern" | "Employee" | "Admin") {
    if (role) {
      return `Get all users with role ${role}`;
    }
    return 'Get all users';
  }

  @Get('interns') // /users/interns
  getAllInterns() {
    return 'Get all interns';
  }

  @Get(':id') // /users/:id
  getUserById(@Param('id') id: string) {
    return { 'Get user by id': id };
  }

  @Post() // /users
  createUser(@Body() user: {}) {
    return { 'Created user': user };
  }

  @Patch(':id') // /users/:id
  updateUser(@Param('id') id: string, @Body() updateUser: {}) {
    return { 'Updated user': id, updateUser };
  }

  @Delete(':id') // /users/:id
  deleteUser(@Param('id') id: string) {
    return { 'Deleted user': id };
  }
}
