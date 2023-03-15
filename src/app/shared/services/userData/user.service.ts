import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   usersData='';
  constructor() { }
public setUserData(user:any):void {
this.usersData = user
}
 public getUserData():any{
  return this.usersData==''?'error safe data':this.usersData
}
}
