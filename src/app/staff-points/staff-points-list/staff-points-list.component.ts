import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DATA } from 'src/assets/mock-data';

@Component({
  selector: 'app-staff-points-list',
  templateUrl: './staff-points-list.component.html',
  styleUrls: ['./staff-points-list.component.css']
})
export class StaffPointsListComponent implements OnInit {

  public staffMembers$: Observable<{
    name: string;
    totalPoints: number;
    totalSubmissions: number;
    house: string;
  }[]>;

  constructor() {
    
   }

  ngOnInit(): void {
    this.staffMembers$ = of(DATA.staffMembers);
  }

}
