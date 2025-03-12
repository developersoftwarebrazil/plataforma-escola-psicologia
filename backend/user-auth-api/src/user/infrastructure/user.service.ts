import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../application/dto/create-user.dto';
import { User } from '../domain/user.entity';

@Injectable()
export class UserService {
  private users: User[] = [];

  create(createUserDto: CreateUserDto) {
    const newUser = new User();
    newUser.id = (this.users.length + 1).toString();
    newUser.name = createUserDto.name;
    newUser.email = createUserDto.email;
    newUser.role = createUserDto.role;
    newUser.paymentStatus = createUserDto.paymentStatus;
    this.users.push(newUser);
    return newUser;
  }

  findOne(id: string) {
    return this.users.find((user) => user.id === id);
  }
}
