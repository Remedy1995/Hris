import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-managerappraisal',
  templateUrl: './managerappraisal.component.html',
  styleUrls: ['./managerappraisal.component.scss']
})
export class ManagerappraisalComponent implements OnInit {
  AppraisalForm= new FormGroup({
  checkappraisal:new FormControl('',Validators.required),
  appraisalinformation:new FormControl('',Validators.required)
  })
  successmessage:any;
  errormessage:any;
  getAppraisalfield:boolean=false;
  getparamid: string;
  viewdata:any;
  personaldata:any;
  constructor(private service:ApiserviceService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getparamid=this.router.snapshot.paramMap.get('id');
    console.log('my id',this.getparamid)
    //use our id to get a single data
   this.service.singleemployeeobjective(this.getparamid).subscribe(res=>{
    console.log('Single selected data',res)
    if(res===null){
      console.log("no data found")
    }
    else{
      this.viewdata=res;
    }
  })
    this.service.singlepersonaldevelopment(this.getparamid).subscribe(data=>{
      console.log('single personal development of ',data)
      if(data===null){
        console.log("no data found")
      }else{
      this.personaldata=data['0'];
      }
    })
  
}


checkappraisal(){
  let check:String=this.AppraisalForm.value.checkappraisal;
  switch (check) {
    case "Yes":
        this.getAppraisalfield=true;
    break;
        case "No":
        this.getAppraisalfield=false;
      break;
      default:
      console.log("none")
  }

}
  submit(){
    if(this.AppraisalForm.valid){
   this.service.managerAppraisal(this.AppraisalForm.value,this.getparamid).subscribe(res=>{
     if(res){
       console.log(res.message)
       this.successmessage="Appraisal sent successfully";
     }
     else{
       this.errormessage="An error occured Please try again"
     }
   })
  }
  else{
  this.errormessage="All fields are required";
  }
}

}