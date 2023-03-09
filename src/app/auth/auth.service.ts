import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { RoutingService } from '../shard/services/routing.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  test=false;
  message:String=''
  token = localStorage.getItem('4YCgix4J1K9uEm');

  constructor(private http:HttpClient , private routingService :RoutingService) { }

  login(userName:string,password:string):Observable<any>{
    // console.log("test"+this.http.post('https://fakestoreapi.com/auth/login',{userName,password}).subscribe)
    return this.http.post(environment.baseAPI+'deliverystaff/login',{'user-name':userName,'password':password})
  }
  logout(){

  return this.http.post(environment.baseAPI+'deliverystaff/logout',{'token':this.token,'message':this.message})
  }
  // allOrders():Observable<any>{
  //   return this.http.post(environment.baseAPI+'allOrders',{'token':this.token,'message':this.message})

  // }

  updateStatus(prop:string,id:string){
    const httpOptions = {
     headers: new HttpHeaders({
       'Authorization': `Bearer ${this.token}`
     })
   };
     return this.http.get<any>(`${environment.baseAPI}order/update/${id}/${prop}`, httpOptions)

   }
   getDataByStatus(Status:String){
    return this.http.get(environment.baseAPI+'orders/'+Status ,{
      headers : new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
      'Authorization': `Bearer ${this.token}`
   })});
   }
   
  isAuthenticated(): boolean {
  // const token = localStorage.getItem('4YCgix4J1K9uEm');
  return this.token !== null;

  }
}
