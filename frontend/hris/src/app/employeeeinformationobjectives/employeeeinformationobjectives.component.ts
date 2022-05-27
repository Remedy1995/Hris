import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-employeeeinformationobjectives',
  templateUrl: './employeeeinformationobjectives.component.html',
  styleUrls: ['./employeeeinformationobjectives.component.scss']
})
export class EmployeeeinformationobjectivesComponent implements OnInit {

  finaldata:any;
  username:any;
  performance:any;
  personaldevelopment:any;
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
     //get the fullname
     console.log(this.finaldata)
     let firstname=this.finaldata.firstname;
     let lastname=this.finaldata.lastname;
     let fullname=firstname+" "+lastname;
     //query the array using the full name obtained
     this.service.allEmployeePerformance().subscribe(data=>{
      let obj=data.find((o: { fullname: string; })=>o.fullname===fullname)
      console.log('see',obj)
      this.performance=obj;
     })

     this.service.allpersonaldevelopment().subscribe(data=>{
      let obje=data.find((o: { fullname: string; })=>o.fullname===fullname)
     console.log('right',obje)
     this.personaldevelopment=obje;
     })



  })
 
  }

  ngOnInit(): void {
    
  }



}
