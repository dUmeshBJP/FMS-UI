import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { ReportsComponent } from './reports/reports.component';
import { RolesComponent } from './roles/roles.component';
import { FeedbackquestionsComponent } from './feedbackquestions/feedbackquestions.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EventlistComponent,
    ReportsComponent,
    RolesComponent,
    FeedbackquestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
