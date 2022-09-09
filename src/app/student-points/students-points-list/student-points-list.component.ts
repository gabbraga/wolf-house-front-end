import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DATA } from 'src/assets/mock-data';

@Component({
  selector: 'app-student-points-list',
  templateUrl: './student-points-list.component.html',
  styleUrls: ['./student-points-list.component.css']
})
export class StudentPointsListComponent implements OnInit {

  public selectedStudentId: number;

  public students$: Observable<{
    name: string;
    totalPoints: number;
    house: string;
    grade: number;
    teacher: string;
  }[]>;

  constructor() { }

  ngOnInit(): void {
    this.students$ = of(DATA.students);
  }

}
