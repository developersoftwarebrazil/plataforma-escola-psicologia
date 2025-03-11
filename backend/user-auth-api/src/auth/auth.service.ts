import { Injectable } from '@nestjs/common';
import { SingInDto, SingunpDto } from './dtos/auth';

@Injectable()
export class AuthService {
  async signup(data: SingunpDto) {
    console.log(data);

    return data;
  }

  async signin(data: SingInDto) {
    console.log(data);

    return data;
  }
}
