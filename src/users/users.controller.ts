import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() userData: CreateUserDto) {
    return this.usersService.createUser(userData);
  }

  @Get()
  fetchUsers() {
    return this.usersService.fetchUsers();
  }

  @Get(':id')
  fetchUser(@Param('id') id: string) {
    return this.usersService.fetchUserByID(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  updateUser(@Param('id') id: string, @Body() userUpdates: UpdateUserDto) {
    return this.usersService.updateUserByID(id, userUpdates);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUserByID(id);
  }
}
