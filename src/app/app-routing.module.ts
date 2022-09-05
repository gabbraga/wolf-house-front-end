import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LoginComponent } from './login/login.component';
import { TeacherMenuComponent } from './teacher-menu/teacher-menu.component';
import { PointsComponent } from './points/points.component';
import { StudentContributionListComponent } from './student-contribution-list/student-contribution-list.component';
import { MemberManagementPortalComponent } from './member-management/member-management-portal/member-management-portal.component';
const routes: Routes = [
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'teacher-login', component: LoginComponent },
  { path: 'teacher-menu', component: TeacherMenuComponent, children: [
    { path: 'add-points', component: PointsComponent },
    { path: 'student-contributions', component: StudentContributionListComponent},
    { path: 'member-management', component: MemberManagementPortalComponent }
  ]},
  { path: 'add-points', component: PointsComponent },
  { path: 'student-contributions', component: StudentContributionListComponent },
  { path: '',   redirectTo: '/leaderboard', pathMatch: 'full' },
  /* { path: '**', component: PageNotFoundComponent } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
