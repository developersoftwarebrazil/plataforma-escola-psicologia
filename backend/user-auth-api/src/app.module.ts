import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/infrastructure/user.service';
import { CourseController } from './course/course.controller';
import { CourseService } from './course/infrastructure/course.service';
import { EnrollmentController } from './enrollment/enrollment.controller';
import { EnrollmentService } from './enrollment/infrastructure/enrollment.service';
@Module({
  imports: [AuthModule],
  controllers: [UserController, CourseController, EnrollmentController],
  providers: [UserService, CourseService, EnrollmentService],
})
export class AppModule {}
