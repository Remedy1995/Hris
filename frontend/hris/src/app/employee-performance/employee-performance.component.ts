import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-performance',
  templateUrl: './employee-performance.component.html',
  styleUrls: ['./employee-performance.component.scss']
})
export class EmployeePerformanceComponent implements OnInit {
employeeData:any=[];
successmessage:any;
errormessage:any;
currentid:any;
EmployeeForm=new FormGroup({
  fullname:new FormControl('',Validators.required),
  performance_goals:new FormControl('',Validators.required),
  key_performance_measures:new FormControl('',Validators.required),
  Job_holder_comment:new FormControl('',Validators.required),
  score:new FormControl('',Validators.required),
  rating:new FormControl('',Validators.required),
  c:new FormControl('')
})
  constructor(private service:ApiserviceService,private router:Router) { }

  ngOnInit(): void {
   console.log(" your full name is ",localStorage.getItem("fullname"));
   console.log("Your username is",localStorage.getItem("username"))
  
  }

employeePerformance(){

if(this.EmployeeForm.valid){
  console.log('hey',this.employeeData)
  this.service.employeePerformance(this.EmployeeForm.value).subscribe(res=>{
  console.log("see pushing the data to the backend",res)
  this.currentid=res._id;
  console.log("my id is",this.currentid)
  if(res){
    this.router.navigate(['/personaldevelopment'])
  }
  this.successmessage="Employee Performance submitted Succesfully";
  localStorage.setItem("fullname",this.EmployeeForm.value.fullname)
 
  this.EmployeeForm.reset();

})
}
else{
console.log("All fields is required")
this.errormessage="Please fill in all required fields";
}



}


}
