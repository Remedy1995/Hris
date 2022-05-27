import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-viewemployeeobjectives',
  templateUrl: './viewemployeeobjectives.component.html',
  styleUrls: ['./viewemployeeobjectives.component.scss']
})
export class ViewemployeeobjectivesComponent implements OnInit {
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

    this.service.singlepersonaldevelopment(this.getparamid).subscribe(data=>{
      console.log('single personal development of ',data)
     
      if(data===null){
        console.log("no data found")
      }else{
        this.personaldata=data['0'];
      }
      
    })
  })
}
}