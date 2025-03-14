import { Controller, Post, Get, Param, Body } from '@nestjs/common';

import { UserService } from './infrastructure/user.service';
import { CreateUserDto } from './application/dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
}
