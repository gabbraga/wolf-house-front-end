import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd   } from '@angular/router';

@Component({
  selector: 'app-teacher-menu',
  templateUrl: './teacher-menu.component.html',
  styleUrls: ['./teacher-menu.component.css']
})
export class TeacherMenuComponent implements OnInit {

  public actionAreaTitle: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      if(data?.actionAreaTitle) {
        this.actionAreaTitle = data.actionAreaTitle;
      } else {
        this.actionAreaTitle = '';
      }
      console.log(this.actionAreaTitle);
    });

    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        /* console.log(history.state.actionAreaTitle); */
        this.actionAreaTitle = history.state.actionAreaTitle || '';
      }
     });
  }

}
