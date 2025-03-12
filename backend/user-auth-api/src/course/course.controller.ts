import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CourseService } from './infrastructure/course.service';
import { CreateCourseDto } from './application/dto/create-course.dto';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseService.findOne(id);
  }
}
