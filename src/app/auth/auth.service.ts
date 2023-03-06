import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  test=false;

  constructor(private http:HttpClient) { }

  login(userName:string,password:string):Observable<any>{
    // console.log("test"+this.http.post('https://fakestoreapi.com/auth/login',{userName,password}).subscribe)
    return this.http.post(environment.baseAPI+'deliverystaff/login',{'user-name':userName,'password':password})
  }
isAuthenticated(): boolean {
  const token = localStorage.getItem('access_token');
  this.test=true;
  return token !== null;

}
}
