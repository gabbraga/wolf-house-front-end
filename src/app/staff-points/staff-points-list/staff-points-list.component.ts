import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-points-list',
  templateUrl: './staff-points-list.component.html',
  styleUrls: ['./staff-points-list.component.css']
})
export class StaffPointsListComponent implements OnInit {

  public staffMembers: {
    name: string;
    totalPoints: number;
    totalSubmissions: number;
    house: string;
  }[];

  constructor() {
    this.staffMembers = [
      {
        name: 'Brock',
        totalPoints: 120,
        totalSubmissions: 4,
        house: 'Grey'
      },
      {
        name: 'Amy',
        totalPoints: 80,
        totalSubmissions: 7,
        house: 'Timber'
      },
      {
        name: 'Emily',
        totalPoints: 65,
        totalSubmissions: 19,
        house: 'Arctic'
      },
      {
        name: 'Brock',
        totalPoints: 120,
        totalSubmissions: 21,
        house: 'Grey'
      },
      {
        name: 'Amy',
        totalPoints: 80,
        totalSubmissions: 0,
        house: 'Timber'
      },
      {
        name: 'Emily',
        totalPoints: 65,
        totalSubmissions: 3,
        house: 'Arctic'
      },
      {
        name: 'Brock',
        totalPoints: 120,
        totalSubmissions: 9,
        house: 'Grey'
      },
      {
        name: 'Amy',
        totalPoints: 80,
        totalSubmissions: 16,
        house: 'Timber'
      },
      {
        name: 'Emily',
        totalPoints: 65,
        totalSubmissions: 13,
        house: 'Arctic'
      }
    ]
   }

  ngOnInit(): void {
  }

}
