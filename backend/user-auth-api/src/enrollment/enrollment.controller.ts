import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { EnrollmentService } from './infrastructure/enrollment.service';
import { CreateEnrollmentDto } from './application/dto/create-enrollment.dto';

@Controller('enrollments')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Post()
  create(@Body() createEnrollmentDto: CreateEnrollmentDto) {
    return this.enrollmentService.create(createEnrollmentDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enrollmentService.findOne(id);
  }
}
