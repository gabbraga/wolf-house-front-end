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
  }[];

  constructor() {
    this.students = [
      {
        name: 'Brock',
        totalPoints: 120,
        house: 'Grey'
      },
      {
        name: 'Amy',
        totalPoints: 80,
        house: 'Timber'
      },
      {
        name: 'Emily',
        totalPoints: 65,
        house: 'Arctic'
      },
      {
        name: 'Brock',
        totalPoints: 120,
        house: 'Grey'
      },
      {
        name: 'Amy',
        totalPoints: 80,
        house: 'Timber'
      },
      {
        name: 'Emily',
        totalPoints: 65,
        house: 'Arctic'
      },
      {
        name: 'Brock',
        totalPoints: 120,
        house: 'Grey'
      },
      {
        name: 'Amy',
        totalPoints: 80,
        house: 'Timber'
      },
      {
        name: 'Emily',
        totalPoints: 65,
        house: 'Arctic'
      }
    ]
   }

  ngOnInit(): void {
  }

}