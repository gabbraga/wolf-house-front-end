import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface StudentClientModel {
  studentId: string,
  name: string,
  totalPoints$: Observable<number>,
  house: string,
  grade: number | string,
  teacher: string
}

interface StudentServerModel {
  _id: string;
  name: string;
  house: string,
  grade: number | string,
  teacher: string
}

interface PointSubmissionClientModel {
  date: Date;
  points: number;
  paw: string;
  comments: string;
  staff: string;
}

interface PointSubmissionServerModel {
  _id: string;
  date: string;
  points: number;
  paw: string;
  comments: string;
  staff: string;
  studentId: string;
  house: string
}

@Component({
  selector: 'app-student-points-list',
  templateUrl: './student-points-list.component.html',
  styleUrls: ['./student-points-list.component.css']
})
export class StudentPointsListComponent implements OnInit {

  public selectedStudentId: string;
  public students$: Observable<StudentClientModel[]>;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.students$ = this.http.get(environment.api + 'students')
    .pipe(
      map((houses: StudentServerModel[]) => {
        return houses.map((student: StudentServerModel) => {
          return {
            studentId: student._id,
            name: student.name,
            totalPoints$: this.getTotalPoints(student),
            house: student.house,
            grade: student.grade,
            teacher: student.teacher
          }
        });
      })
    );
  }

  getTotalPoints(student: StudentServerModel): Observable<number> {
    return this.http.get(environment.api + `point-submissions?studentId=${student._id}`).pipe(
      map((submissions: PointSubmissionServerModel[]) => {
        let totalPoints = 0;
        for (const submission of submissions) {
          totalPoints += submission.points;
        }
        return totalPoints;
      })
    );

  }
}
