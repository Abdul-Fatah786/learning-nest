/* eslint-disable prettier/prettier */
import { CreateUserDto } from './create-user-dto';
import { PartialType } from '@nestjs/mapped-types';

// DTO (Data Transfer Object) for updating a user
export class UpdateUserDto extends PartialType(CreateUserDto) {}
