import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
login (user:string,pass :string ):Observable <any>{

return this.http.post<any>('',{user,pass})
const setToken= localStorage.setItem('token',pass)

}
isAuthenticated(): boolean {
  const token = localStorage.getItem('access_token');
  return token !== null;
}
}
