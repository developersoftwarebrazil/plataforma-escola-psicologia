import { Injectable } from '@nestjs/common';
import { CreateEnrollmentDto } from '../application/dto/create-enrollment.dto';
import { Enrollment } from '../domain/enrollment.entity';

@Injectable()
export class EnrollmentService {
  private enrollments: Enrollment[] = [];

  create(createEnrollmentDto: CreateEnrollmentDto) {
    const newEnrollment = new Enrollment();
    newEnrollment.id = (this.enrollments.length + 1).toString();
    newEnrollment.userId = createEnrollmentDto.userId;
    newEnrollment.courseId = createEnrollmentDto.courseId;
    newEnrollment.status = createEnrollmentDto.status;
    this.enrollments.push(newEnrollment);
    return newEnrollment;
  }

  findOne(id: string) {
    return this.enrollments.find(enrollment => enrollment.id === id);
  }
}
