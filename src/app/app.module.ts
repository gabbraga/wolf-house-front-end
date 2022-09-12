import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PointsComponent } from './points/points.component';
import { LoginComponent } from './login/login.component';
import { TeacherMenuComponent } from './teacher-menu/teacher-menu.component';
import { AddMemberComponent } from './member-management/add-member/add-member.component';
import { EditMemberComponent } from './member-management/edit-member/edit-member.component';
import { RemoveMemberComponent } from './member-management/remove-member/remove-member.component';
import { MemberManagementPortalComponent } from './member-management/member-management-portal/member-management-portal.component';
import { StudentPointsDetailsComponent } from './student-points/student-points-details/student-points-details.component';
import { StudentPointsListComponent } from './student-points/students-points-list/student-points-list.component';
import { StaffPointsDetailsComponent } from './staff-points/staff-points-details/staff-points-details.component';
import { StaffPointsListComponent } from './staff-points/staff-points-list/staff-points-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    PointsComponent,
    LoginComponent,
    TeacherMenuComponent,
    AddMemberComponent,
    EditMemberComponent,
    RemoveMemberComponent,
    MemberManagementPortalComponent,
    StaffPointsListComponent,
    StaffPointsDetailsComponent,
    StudentPointsListComponent,
    StudentPointsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
