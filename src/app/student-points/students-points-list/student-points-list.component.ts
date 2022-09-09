import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-points-list',
  templateUrl: './student-points-list.component.html',
  styleUrls: ['./student-points-list.component.css']
})
export class StudentPointsListComponent implements OnInit {

  public students: {
    name: string;
    totalPoints: number;
    house: string;
    grade: number;
    teacher: string;
  }[];

  constructor() {
    this.students = [
      {
        name: 'Brock',
        totalPoints: 120,
        house: 'Grey',
        grade: 2,
        teacher: 'Gabriela'
      },
      {
        name: 'Amy',
        totalPoints: 80,
        house: 'Timber',
        grade: 6,
        teacher: 'Tiffany'
      },
      {
        name: 'Emily',
        totalPoints: 65,
        house: 'Arctic',
        grade: 1,
        teacher: 'Tiffany'
      },
      {
        name: 'Brock',
        totalPoints: 120,
        house: 'Grey',
        grade: 2,
        teacher: 'Gabriela'
      },
      {
        name: 'Amy',
        totalPoints: 80,
        house: 'Timber',
        grade: 4,
        teacher: 'Betty'
      },
      {
        name: 'Emily',
        totalPoints: 65,
        house: 'Arctic',
        grade: 5,
        teacher: 'Tiffany'
      },
      {
        name: 'Brock',
        totalPoints: 120,
        house: 'Grey',
        grade: 2,
        teacher: 'Gabriela'
      },
      {
        name: 'Amy',
        totalPoints: 80,
        house: 'Timber',
        grade: 3,
        teacher: 'Jeremy'
      },
      {
        name: 'Emily',
        totalPoints: 65,
        house: 'Arctic',
        grade: 6,
        teacher: 'Tiffany'
      }
    ]
   }

  ngOnInit(): void {
  }

}
