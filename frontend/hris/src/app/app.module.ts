import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeePerformanceComponent } from './employee-performance/employee-performance.component';
import {HttpClientModule} from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import { ReactiveFormsModule } from '@angular/forms';
import { GetallusersComponent } from './getallusers/getallusers.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ManagereditComponent } from './manageredit/manageredit.component';
import { ManagerviewComponent } from './managerview/managerview.component';
import { PersonaldevelopmentComponent } from './personaldevelopment/personaldevelopment.component';
import { LinemanagerappraisalComponent } from './linemanagerappraisal/linemanagerappraisal.component';
import { ViewemployeeobjectivesComponent } from './viewemployeeobjectives/viewemployeeobjectives.component';
import { ManagerappraisalComponent } from './managerappraisal/managerappraisal.component';
import { HeaderComponent } from './header/header.component';
import { EmployeesidebarComponent } from './employeesidebar/employeesidebar.component';
import { ManagerloginComponent } from './managerlogin/managerlogin.component';
import { ManagerdashboardComponent } from './managerdashboard/managerdashboard.component';
import { ManagersidebarComponent } from './managersidebar/managersidebar.component';
import { EmployeeviewComponent } from './employeeview/employeeview.component';
import { EmployeeeinformationobjectivesComponent } from './employeeeinformationobjectives/employeeeinformationobjectives.component';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeePerformanceComponent,
    GetallusersComponent,
    LoginpageComponent,
    ManagereditComponent,
    ManagerviewComponent,
    PersonaldevelopmentComponent,
    LinemanagerappraisalComponent,
    ViewemployeeobjectivesComponent,
    ManagerappraisalComponent,
    HeaderComponent,
    EmployeesidebarComponent,
    ManagerloginComponent,
    ManagerdashboardComponent,
    ManagersidebarComponent,
    EmployeeviewComponent,
    EmployeeeinformationobjectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    NgxSpinnerModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
