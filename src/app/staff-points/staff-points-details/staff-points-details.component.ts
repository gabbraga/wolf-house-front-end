import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-points-details',
  templateUrl: './staff-points-details.component.html',
  styleUrls: ['./staff-points-details.component.css']
})
export class StaffPointsDetailsComponent implements OnInit {

  public staffMember: {
    name: string;
    house: string;
  };

  public pointsSubmissions: {
    date: string;
    points: number;
    paw: string;
    comments: string;
    staffSignOff: string;
  }[];
  public totalPoints: number;
  public totalSubmissions: number;

  constructor() { 
    this.staffMember = {
      name: 'Max',
      house: 'Arctic'
    }
    this.pointsSubmissions = [
      {
        date: '12/03/2022',
        points: 10,
        paw: 'Honesty',
        comments: 'best policy',
        staffSignOff: 'Brock'
      },
      {
        date: '11/02/2022',
        points: 15,
        paw: 'Perseverence',
        comments: '10/10 persevered',
        staffSignOff: 'Bonnie'
      },
      {
        date: '08/13/2022',
        points: 5,
        paw: 'Kindness',
        comments: 'so kind omg',
        staffSignOff: 'Scott'
      }
    ];
    this.totalPoints = this.getTotalPoints();
    this.totalSubmissions = 5;
  }

  ngOnInit(): void {
  }

  private getTotalPoints(): number {
    let totalPoints = 0;
    for (const submission of this.pointsSubmissions) {
      totalPoints += submission.points;
    }
    return totalPoints;
  }

}
