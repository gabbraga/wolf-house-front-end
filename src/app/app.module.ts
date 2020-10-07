import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { MemberManagementComponent } from './member-management/member-management.component';
import { PointsComponent } from './points/points.component';
import { ContributionHistoryComponent } from './contribution-history/contribution-history.component';
import { LoginComponent } from './login/login.component';
import { AccountManagementComponent } from './account-management/account-management.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    MemberManagementComponent,
    PointsComponent,
    ContributionHistoryComponent,
    LoginComponent,
    AccountManagementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
