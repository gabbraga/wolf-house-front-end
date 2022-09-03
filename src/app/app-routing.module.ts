import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { MemberManagementComponent } from './member-management/member-management.component';
import { PointsComponent } from './points/points.component';
import { ContributionHistoryComponent } from './contribution-history/contribution-history.component';
import { LoginComponent } from './login/login.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { StudentContributionListComponent } from './student-contribution-list/student-contribution-list.component';

const routes: Routes = [
  { path: 'student-contributions', component: StudentContributionListComponent },
  { path: '',   redirectTo: '/student-contributions', pathMatch: 'full' },
  /* { path: '**', component: PageNotFoundComponent } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
