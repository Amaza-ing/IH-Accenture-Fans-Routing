import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses: any;
  astronomy: string;

  courseForm: FormGroup;
  courseInput: FormControl;

  constructor(private courseService: CourseService) {
    this.astronomy = "astronomy2";

    this.courseInput = new FormControl('', [
      Validators.required
    ]);

    this.courseForm = new FormGroup({
      course: this.courseInput,
    });
  }

  getCourses(): void {
    this.courseService.getCourses().subscribe(
      {
        next: (data) => {
          console.log(data);
          this.courses = data;
        }
      }
    )
  }

  postCourse(courseName: string): void {
    const course = {
      course: courseName,
      hours: 100,
      classroom: "A1",
      vacations: "2 weeks",
      teacher: {
          teacherId: 1
      }
    }

    this.courseService.postCourse(course).subscribe(
      {
        next: (data) => {
          console.log(data);  
          this.getCourses();    
        }
      }
    )
  }

  onSubmit(): void {
    console.log(this.courseInput.value);
    this.postCourse(this.courseInput.value)
  }

}
