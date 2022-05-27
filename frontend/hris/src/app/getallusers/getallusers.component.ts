import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-getallusers',
  templateUrl: './getallusers.component.html',
  styleUrls: ['./getallusers.component.scss']
})
export class GetallusersComponent implements OnInit {
alluser:any;
successmessage:any;
  constructor(private service:ApiserviceService) { }

  ngOnInit(): void {




    
  this.getUsers();


  
  }






  
  getUsers(){
    this.service.getAlldata().subscribe((res)=>{
    this.alluser=res.data;
    });
  }
  delete(id:any){
   this.service.deleteuser(id).subscribe((res)=>{
     if(res){
       console.log(res.message)
       this.successmessage=res.message;
       this.getUsers();
     }
   })
  }
}
