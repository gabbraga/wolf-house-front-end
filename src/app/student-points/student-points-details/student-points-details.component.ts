import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DATA } from 'src/assets/mock-data';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-student-points-details',
  templateUrl: './student-points-details.component.html',
  styleUrls: ['./student-points-details.component.css']
})
export class StudentPointsDetailsComponent implements OnInit, OnChanges {

  @Input() studentId: number;

  public student$: Observable<{
    id: number;
    name: string;
    totalPoints: number;
    house: string;
    grade: number;
    teacher: string;
  }>;

  public pointsSubmissions$: Observable<{
    date: string;
    points: number;
    paw: string;
    comments: string;
    staff: string;
  }[]>;

  public totalPoints: number;

  constructor() { 
    this.pointsSubmissions$ = of(DATA.pointsSubmissions);
    this.totalPoints = this.getTotalPoints();
  }

  ngOnChanges() {
    this.student$ = of(DATA.students).pipe(
      map((students: any) => {
        return students.filter((student: any) => {
          return student.id == this.studentId;
        });
      })
    );
  }

  ngOnInit(): void {
  }

  private getTotalPoints(): number {
    let totalPoints = 0;
    /* for (const submission of this.pointsSubmissions) {
      totalPoints += submission.points;
    } */
    return totalPoints;
  }

}
