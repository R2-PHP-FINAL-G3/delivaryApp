import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoutingService } from '../shard/services/routing.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  test=false;

  constructor(private http:HttpClient, private routing:RoutingService) { }

  login(username:string,password:string):Observable<any>{
    // console.log("test"+this.http.post('https://fakestoreapi.com/auth/login',{username,password}).subscribe)
    return this.http.post(this.routing.url+"auth/login",{username,password})
  }
isAuthenticated(): boolean {
  const token = localStorage.getItem('access_token');
  this.test=true;
  return token !== null;

}
}
