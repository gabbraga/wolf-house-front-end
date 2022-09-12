import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface StudentClientModel {
  studentId: string,
  name: string,
  totalPoints: number,
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
  selector: 'app-student-points-details',
  templateUrl: './student-points-details.component.html',
  styleUrls: ['./student-points-details.component.css']
})
export class StudentPointsDetailsComponent implements OnInit, OnChanges {

  @Input() studentId: string;
  public studentTotalPoints: number;
  public student$: Observable<StudentClientModel>;
  public pointSubmissions$: Observable<PointSubmissionClientModel[]>;

  constructor(
    private http: HttpClient
  ) { 
    this.studentTotalPoints = 0;
  }


  ngOnChanges() {
    this.student$ = this.http.get(environment.api + 'students').pipe(
      map((students: StudentServerModel[]) => {
        let studentFromServer: StudentServerModel = students.find((student: StudentServerModel) => {
          return student._id == this.studentId;
        }) || {
         _id: '',
          name: '',
          house: '',
          grade: '',
          teacher: ''
        };
        let studentForClient: StudentClientModel = {
          studentId: studentFromServer._id,
          name: studentFromServer.name,
          totalPoints: 200,
          house: studentFromServer.house,
          grade: studentFromServer.grade,
          teacher: studentFromServer.teacher
        };
        return studentForClient;
      })
    );

    this.pointSubmissions$ = this.http.get(environment.api + `point-submissions?studentId=${this.studentId}`).pipe(
      map((submissions: PointSubmissionServerModel[]) => {
        return submissions.map((submission: PointSubmissionServerModel) => {
          return {
            date: new Date(submission.date),
            points: submission.points,
            paw: submission.paw,
            comments: submission.comments,
            staff: submission.staff
          }
        });
      })
    );

    this.pointSubmissions$.subscribe((submissions: PointSubmissionClientModel[]) => {
      let totalPoints = 0;
      for (const submission of submissions) {
        totalPoints += submission.points;
      }
      this.studentTotalPoints = totalPoints;
    })
  }

  ngOnInit(): void {
    
  }


}
