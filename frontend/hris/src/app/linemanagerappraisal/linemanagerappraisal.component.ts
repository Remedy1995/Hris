import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-linemanagerappraisal',
  templateUrl: './linemanagerappraisal.component.html',
  styleUrls: ['./linemanagerappraisal.component.scss']
})
export class LinemanagerappraisalComponent implements OnInit {
 getobjectives:any;
  successmessage:any;
    constructor(private service:ApiserviceService) { }
  
    ngOnInit(): void { 
    this.employee();   
    }  
    employee(){
      this.service.employeeobjectives().subscribe((res)=>{
      this.getobjectives=res.data;
      console.log("hello",this.getobjectives)
      });
    }
  
  }
  