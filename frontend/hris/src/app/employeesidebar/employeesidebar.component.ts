import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeesidebar',
  templateUrl: './employeesidebar.component.html',
  styleUrls: ['./employeesidebar.component.scss']
})
export class EmployeesidebarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('token')
    console.log(localStorage.removeItem('token'))
    this.router.navigate(['/login'])
  }
}

