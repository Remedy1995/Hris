import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-personaldevelopment',
  templateUrl: './personaldevelopment.component.html',
  styleUrls: ['./personaldevelopment.component.scss']
})
export class PersonaldevelopmentComponent implements OnInit {

  constructor(private service:ApiserviceService,private router:Router) { }
  getfullname:any;
  ngOnInit(): void {
    console.log("The fullname you entered is",localStorage.getItem("fullname"));
    this.getfullname=localStorage.getItem("fullname");
  }
 
  successmessage:any;
  errormessage:any;
    EmployeeForm2=new FormGroup({
    fullname:new FormControl('',Validators.required),
    Personal_learning_and_devt_goals:new FormControl('',Validators.required),
    Manager_support:new FormControl('',Validators.required),
    Activity_to_achieve_goal:new FormControl('',Validators.required),
    Job_holder_comment:new FormControl('',Validators.required),
    score:new FormControl('',Validators.required),
    rating:new FormControl('',Validators.required)
  
  })
    
  personaldevelopment(){
  
  if(this.EmployeeForm2.valid){
  console.log(this.EmployeeForm2)
    this.service.personaldevelopment(this.EmployeeForm2.value).subscribe(res=>{
    console.log("see pushing the data to the backend",res)
    this.successmessage="Employee Performance submitted Succesfully";
    this.EmployeeForm2.reset();
    localStorage.removeItem("fullname")
    })
  }
else{
console.log("All fields is required")
this.errormessage="Please fill in all required fields";
}


  }




}