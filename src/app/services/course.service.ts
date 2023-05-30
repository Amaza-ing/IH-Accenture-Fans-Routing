import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private readonly API_URL = "http://localhost:8080/api/courses";

  constructor(private http: HttpClient) { }

  getCourses(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }

  postCourse(body: any): Observable<any> {
    return this.http.post<any>(this.API_URL, body);
  }
}
