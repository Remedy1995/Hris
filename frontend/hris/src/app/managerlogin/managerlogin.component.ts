import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-managerlogin',
  templateUrl: './managerlogin.component.html',
  styleUrls: ['./managerlogin.component.scss']
})
export class ManagerloginComponent implements OnInit {

  
  constructor(private service:ApiserviceService,private router:Router,private spinner:NgxSpinnerService) { }
  
employeeData:any=[];
successmessage:any;
errormessage1:any;
successmessage1:any;
errormessage:any;
SignUpForm=new FormGroup({
firstname:new FormControl('',Validators.required),
lastname:new FormControl('',Validators.required),
email:new FormControl('',Validators.required),
username:new FormControl('',Validators.required),
password:new FormControl('',Validators.required),
confirm_pass:new FormControl('',Validators.required),
dob:new FormControl('',Validators.required)
})

  LoginForm=new FormGroup({
  username:new FormControl('',Validators.required),
  password:new FormControl('',Validators.required),
  }) 
  ngOnInit(): void {
  }

submit(){
  this.spinner.show();
  setTimeout(() => {
 /** spinner ends after 5 seconds */
 this.spinner.hide();
}, 5000);
  if(this.SignUpForm.valid){
  if(this.SignUpForm.value.password!=this.SignUpForm.value.confirm_pass){
    console.log("please password does not match")
    this.errormessage="please password does not match";
  }else{
    this.service.createuser(this.SignUpForm.value).subscribe(res=>{
      
    if(res.message==="Registration successful"){
      console.log(res.message)
      this.successmessage="Registration successful";
    }else{
      console.log("Internal Server Error")
    };
     
    })
    
  }
  }else{
    console.log("All fields are required");
    this.errormessage="All fields are required";
  }
}

SignIn(){
  this.spinner.show();
  setTimeout(() => {
 /** spinner ends after 5 seconds */
 this.spinner.hide();
}, 3000);
  if(this.LoginForm.valid){
    this.service.managerLogin(this.LoginForm.value).subscribe({
    next:(data)=>{
      console.log(data)
      localStorage.setItem('token',data)
      this.router.navigate(['/managerdashboard'])
    },
    error:(error)=>{console.log(error.error)
    this.errormessage1=error.error.error;
    },
    complete:()=>{console.info('completed'),
  localStorage.setItem('username',this.LoginForm.value.username)}
    })
  }else{
    console.log("All fields are required")
    this.errormessage1="All fields are required";
  }

}

managerRoute(){
  this.router.navigate(['/dashboard'])
}

}