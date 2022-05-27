import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-manageredit',
  templateUrl: './manageredit.component.html',
  styleUrls: ['./manageredit.component.scss']
})
export class ManagereditComponent implements OnInit {
  
  employeeData:any=[];
  successmessage:any;
  errormessage:any;
  EditForm=new FormGroup({
  firstname:new FormControl('',Validators.required),
  lastname:new FormControl('',Validators.required),
  email:new FormControl('',Validators.required),
  username:new FormControl('',Validators.required),
  dob:new FormControl('',Validators.required)
  })
  getparamid:any;
  getsingle:any;
  constructor(private service:ApiserviceService,private router:ActivatedRoute) { }

  ngOnInit(): void {
   
   this.getparamid=this.router.snapshot.paramMap.get('id');
   //use our id to get a single data
  this.service.getSingleData(this.getparamid).subscribe(res=>{
   console.log('Single selected data',res)
   this.getsingle=res;
   this.EditForm.patchValue({
     firstname:res.firstname,
     lastname:res.lastname,
     username:res.username,
     email:res.email,
     dob:res.dob,
   }) })
  }


  userUpdate(){
 if(this.EditForm.valid){
  this.service.updateData(this.EditForm.value,this.getparamid).subscribe(res=>{
    console.log('hello',res)
    this.successmessage="Information updated successfully";
    this.EditForm.reset();
  })
 }else{
   console.log("All input fields are required")
   this.errormessage="All input fields are required";
 }
  }
}
