import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managersidebar',
  templateUrl: './managersidebar.component.html',
  styleUrls: ['./managersidebar.component.scss']
})
export class ManagersidebarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('token')
    console.log(localStorage.removeItem('token'))
    this.router.navigate(['/login'])
  }
}