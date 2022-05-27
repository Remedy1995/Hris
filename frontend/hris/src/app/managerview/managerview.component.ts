import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-managerview',
  templateUrl: './managerview.component.html',
  styleUrls: ['./managerview.component.scss']
})
export class ManagerviewComponent implements OnInit {
  getparamid: string;
  viewdata:any;
  constructor(private service:ApiserviceService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getparamid=this.router.snapshot.paramMap.get('id');
    console.log('my id',this.getparamid)
    //use our id to get a single data
   this.service.getSingleData(this.getparamid).subscribe(res=>{
    console.log('Single selected data',res)
    this.viewdata=res;
  })
}

}