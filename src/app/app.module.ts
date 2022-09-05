import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { NgSelectModule } from '@ng-select/ng-select';


import { AppComponent } from './app.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PointsComponent } from './points/points.component';
import { ContributionHistoryComponent } from './contribution-history/contribution-history.component';
import { LoginComponent } from './login/login.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { StudentContributionListComponent } from './student-contribution-list/student-contribution-list.component';
import { TeacherMenuComponent } from './teacher-menu/teacher-menu.component';
import { AddMemberComponent } from './member-management/add-member/add-member.component';
import { EditMemberComponent } from './member-management/edit-member/edit-member.component';
import { RemoveMemberComponent } from './member-management/remove-member/remove-member.component';
import { MemberManagementPortalComponent } from './member-management/member-management-portal/member-management-portal.component';


@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    PointsComponent,
    ContributionHistoryComponent,
    LoginComponent,
    AccountManagementComponent,
    StudentContributionListComponent,
    TeacherMenuComponent,
    AddMemberComponent,
    EditMemberComponent,
    RemoveMemberComponent,
    MemberManagementPortalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
