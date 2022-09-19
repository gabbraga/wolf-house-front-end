import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
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
  public filtersForm: FormGroup;
  public teachers$: Observable<string[]>;
  public houses$: Observable<string[]>;
  public grades$: Observable<(string | number)[]>

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.teachers$ = of(['Tiffany','Gabriela','Betty', 'Jeremy']);
    this.houses$ = of(['Arctic', 'Grey','Timber']);
    this.grades$ = of(['JK','SK',1,2,3,4,5,6,7,8]);
  }

  ngOnInit(): void {
    this.getStudents();
    this.filtersForm = this.formBuilder.group({
      teacher: null,
      grade: null,
      house: null
    });

    this.filtersForm.valueChanges.subscribe((formValue: any) => {
      this.getStudents(formValue.house, formValue.grade, formValue.teacher);
    })
  }

  getStudents(house: string = '', grade: string = '', teacher: string = '') {
    this.students$ = this.http.get(environment.api 
      + 'students?'
      + (house ? `house=${house}` : '')
      + (grade ? `&grade=${grade}` : '')
      + (teacher ? `&teacher=${teacher}` : ''))
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
