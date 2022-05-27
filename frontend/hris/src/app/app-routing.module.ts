import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeePerformanceComponent } from './employee-performance/employee-performance.component';
import { EmployeeeinformationobjectivesComponent } from './employeeeinformationobjectives/employeeeinformationobjectives.component';
import { EmployeeviewComponent } from './employeeview/employeeview.component';
import { GetallusersComponent } from './getallusers/getallusers.component';
import { LinemanagerappraisalComponent } from './linemanagerappraisal/linemanagerappraisal.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ManagerappraisalComponent } from './managerappraisal/managerappraisal.component';
import { ManagerdashboardComponent } from './managerdashboard/managerdashboard.component';
import { ManagereditComponent } from './manageredit/manageredit.component';
import { ManagerloginComponent } from './managerlogin/managerlogin.component';
import { ManagerviewComponent } from './managerview/managerview.component';
import { PersonaldevelopmentComponent } from './personaldevelopment/personaldevelopment.component';
import { ViewemployeeobjectivesComponent } from './viewemployeeobjectives/viewemployeeobjectives.component';

const routes: Routes = [
  {path:'employeeperformance',component:EmployeePerformanceComponent},
  {path:'',component:LoginpageComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'getallusers',component:GetallusersComponent},
  {path:'login',component:LoginpageComponent},
  {path:'manageredit/:id',component:ManagereditComponent},
  {path:'managerview/:id',component:ManagerviewComponent},
  {path:'personaldevelopment',component:PersonaldevelopmentComponent},
  {path:'lineappraisal',component:LinemanagerappraisalComponent},
  {path:'viewobjective/:id',component:ViewemployeeobjectivesComponent},
  {path:'managerappraisal/:id',component:ManagerappraisalComponent},
  {path:'managerlogin',component:ManagerloginComponent},
  {path:'managerdashboard',component:ManagerdashboardComponent},
  {path:'employeeview',component:EmployeeviewComponent},
  {path:'employee-information-objectives',component:EmployeeeinformationobjectivesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
