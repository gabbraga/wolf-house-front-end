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
import { MemberManagementComponent } from './member-management/member-management.component';
import { PointsComponent } from './points/points.component';
import { ContributionHistoryComponent } from './contribution-history/contribution-history.component';
import { LoginComponent } from './login/login.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { StudentContributionListComponent } from './student-contribution-list/student-contribution-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    MemberManagementComponent,
    PointsComponent,
    ContributionHistoryComponent,
    LoginComponent,
    AccountManagementComponent,
    StudentContributionListComponent
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
