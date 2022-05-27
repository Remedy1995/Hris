import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  apiUrl="http://localhost:4000/getallusers/getallusers";
  employeeUrl="http://localhost:4000/employeeperformance/employeeperformance";
  deleteuserUrl="http://localhost:4000/deleteuser/deleteuser";
  createuserUrl="http://localhost:4000/createuser/createuser";
  edituserUrl="http://localhost:4000/edituser/edituser";
  getsingledataUrl="http://localhost:4000/getsingledata/getsingledata";
  getpersonaldevelopment="http://localhost:4000/personaldevelopment/personaldevelopment";
  getemployeeobjectives="http://localhost:4000/getemployeeobjectives/getemployeeobjectives";
   getsingleemployeeobjective="http://localhost:4000/getSingleemployeeobjective/getSingleemployeeobjective";
   getsinglepersonaldevelopment="http://localhost:4000/getSingleemployeeobjective/getpersonaldevelopment";
  managersendappraisal="http://localhost:4000/managersendappraisal/managersendappraisal";
  getuserlogin="http://localhost:4000/userlogin/userlogin";
  getusername="http://localhost:4000/userlogin/username";
  getsingleinfo="http://localhost:4000/finduserinfo/finduserinfo";
  adminlogin="http://localhost:4000/managerlogin/managerlogin";
  allemployeeperformance="http://localhost:4000/getallemployeeobjectives/getallemployeeobjectives";
  getallpersonaldevelopment="http://localhost:4000/getallpersonaldevelopment/getallpersonaldevelopment";
   getAlldata():Observable<any>{
    return this._http.get(`${this.apiUrl}`);
  }
  
  employeePerformance(data:any):Observable<any>{
    return this._http.post(`${this.employeeUrl}`,data);
  }


  deleteuser(id:any):Observable<any>{
    let ids=id;
    return this._http.delete(`${this.deleteuserUrl}/${ids}`);
  }


  createuser(data:any):Observable<any>{
    return this._http.post(`${this.createuserUrl}`,data);
  }

  updateData(data:any,id:any):Observable<any>{
    let ids=id;
    return this._http.put(`${this.edituserUrl}/${ids}`,data);
  }

  getSingleData(id:any):Observable<any>{
    let ids=id;
    return this._http.get(`${this.getsingledataUrl}/${ids}`);
  }


  personaldevelopment(data:any):Observable<any>{
    return this._http.post(`${this.getpersonaldevelopment}`,data);
  }

employeeobjectives():Observable<any>{
  return this._http.get(`${this.getemployeeobjectives}`);
}

singleemployeeobjective(id:any):Observable<any>{
  let ids=id;
    return this._http.get(`${this.getsingleemployeeobjective}/${ids}`);
  }

   singlepersonaldevelopment(id:any):Observable<any>{
    let ids=id;
    return this._http.get(`${this.getsinglepersonaldevelopment}/${ids}`);
  }

  managerAppraisal(data:any,id:any):Observable<any>{
    let ids=id;
    return this._http.put(`${this.managersendappraisal}/${ids}`,data);
  }

  loginIn(data:any):Observable<any>{
    return this._http.post(`${this.getuserlogin}`,data);
  }
  getUsername():Observable<any>{
    
    return this._http.get(`${this.getusername}`,{
      params:new HttpParams().append('token',localStorage.getItem('token'))
    });
  }
  Usersingleinfo(data:any):Observable<any>{
    return this._http.get(`${this.getsingleinfo}`,data);
  }

  managerLogin(data:any):Observable<any>{
    return this._http.post(`${this.adminlogin}`,data);
  }

  allEmployeePerformance():Observable<any>{
    return this._http.get(`${this.allemployeeperformance}`);
  }
  allpersonaldevelopment():Observable<any>{
    return this._http.get(`${this.getallpersonaldevelopment}`);
  }
} 