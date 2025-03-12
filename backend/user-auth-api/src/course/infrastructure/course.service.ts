import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from '../application/dto/create-course.dto';
import { Course } from '../domain/course.entity';

@Injectable()
export class CourseService {
  private courses: Course[] = [];

  create(createCourseDto: CreateCourseDto) {
    const newCourse = new Course();
    newCourse.id = (this.courses.length + 1).toString();
    newCourse.title = createCourseDto.title;
    newCourse.description = createCourseDto.description;
    newCourse.createdById = createCourseDto.createdById;
    this.courses.push(newCourse);
    return newCourse;
  }

  findOne(id: string) {
    return this.courses.find((course) => course.id === id);
  }
}
