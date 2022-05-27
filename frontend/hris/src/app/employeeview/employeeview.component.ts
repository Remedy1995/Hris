import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-employeeview',
  templateUrl: './employeeview.component.html',
  styleUrls: ['./employeeview.component.scss']
})
export class EmployeeviewComponent implements OnInit {

  finaldata:any;
  username:any;
 constructor(private service:ApiserviceService,private router:Router ) {
   this.service.getUsername().subscribe({
     next:(data)=>{this.username=data.toString()
      },error:(error)=>this.router.navigate(['/login']),
     complete:()=>console.info('completed')
   })

   this.service.Usersingleinfo(this.username).subscribe(userdata=>{
     console.log('this is the data',userdata)
     let loggedusername=localStorage.getItem('username');
     let obj=userdata.find((o: { username: string; })=>o.username===loggedusername)
     this.finaldata=obj;
     console.log(this.finaldata)
     
  })
 
  }

  ngOnInit(): void {
    
  }
}
