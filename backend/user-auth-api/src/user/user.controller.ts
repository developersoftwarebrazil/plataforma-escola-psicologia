import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './infrastructure/user.service';
import { CreateUserDto } from './application/dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
}
