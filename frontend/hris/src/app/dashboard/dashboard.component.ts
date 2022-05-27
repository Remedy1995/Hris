import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
  logout(){
    localStorage.removeItem('token')
    console.log(localStorage.removeItem('token'))
    this.router.navigate(['/login'])
  }
}
