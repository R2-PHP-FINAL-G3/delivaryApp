import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { RoutingService } from '../shard/services/routing.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  test=false;
  message:String=''

  constructor(private http:HttpClient , private routingService :RoutingService) { }

  login(userName:string,password:string):Observable<any>{
    // console.log("test"+this.http.post('https://fakestoreapi.com/auth/login',{userName,password}).subscribe)
    return this.http.post(environment.baseAPI+'deliverystaff/login',{'user-name':userName,'password':password})
  }
  logout(){

    const token = localStorage.getItem('4YCgix4J1K9uEm');
  return this.http.post(environment.baseAPI+'deliverystaff/logout',{'token':token,'message':this.message})
  }
isAuthenticated(): boolean {
  const token = localStorage.getItem('4YCgix4J1K9uEm');
  return token !== null;

}
}
