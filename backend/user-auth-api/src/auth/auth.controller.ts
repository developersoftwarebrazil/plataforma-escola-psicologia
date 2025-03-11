import { Body, Controller, Post } from '@nestjs/common';
import { SingInDto, SingunpDto } from './dtos/auth';
import { AuthService } from './auth.service';

//POST /auth/signup (email, password)
//POST /auth/login (email, password)

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  async signup(@Body() body: SingunpDto) {
    console.log(body);
    await this.authService.signup(body);
    return body;
  }

  @Post('signin')
  async signin(@Body() body: SingInDto) {
    console.log(body);
    await this.authService.signin(body);
    return body;
  }
}
