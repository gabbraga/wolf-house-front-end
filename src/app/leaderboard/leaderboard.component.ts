import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface HouseClientModel {
  houseName: string;
  totalPoints: number;
}

interface HouseServerModel {
  _id: string;
  totalPoints: number;
}

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  @Input() tiny: boolean = false;
  public houses$: Observable<HouseClientModel[]> | null; 

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {
    this.houses$ = null;
   }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      if(data?.tiny) {
        this.tiny=data.tiny;
      }
    });
    this.houses$ = this.http.get(environment.api + 'point-submissions/leaderBoardTotals')
    .pipe(
      map((houses: HouseServerModel[]) => {
        return houses.map((house: HouseServerModel) => {
          return {
            houseName: house._id,
            totalPoints: house.totalPoints
          }
        });
      })
    );
  }

}
