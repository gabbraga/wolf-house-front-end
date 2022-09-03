import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contribution-history',
  templateUrl: './contribution-history.component.html',
  styleUrls: ['./contribution-history.component.css']
})
export class ContributionHistoryComponent implements OnInit {

  public student: {
    name: string;
    house: string;
  };

  public pointsSubmissions: {
    date: string;
    points: number;
    paw: string;
    comments: string;
    staff: string;
  }[];
  public totalPoints: number;

  constructor() { 
    this.student = {
      name: 'Max',
      house: 'Arctic'
    }
    this.pointsSubmissions = [
      {
        date: '12/03/2022',
        points: 10,
        paw: 'Honesty',
        comments: 'best policy',
        staff: 'Brock'
      },
      {
        date: '11/02/2022',
        points: 15,
        paw: 'Perseverence',
        comments: '10/10 persevered',
        staff: 'Bonnie'
      },
      {
        date: '08/13/2022',
        points: 5,
        paw: 'Kindness',
        comments: 'so kind omg',
        staff: 'Scott'
      }
    ];
    this.totalPoints = this.getTotalPoints();
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
