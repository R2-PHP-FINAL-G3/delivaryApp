import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  boolDesplayed: boolean = false;
constructor(private router :Router, private auth : AuthService){}
goTo(param:string){
  this.router.navigate([param]);
}
logout(prop:string){
this.goTo(prop)
localStorage.clear()
setTimeout(()=>location.reload(),1)
}
@Input() isLoggedIn(): boolean {
  // Check if the user is logged in
  return true; // or false
}
// isLogin(even:boolean){
// this.bool=even
// }
count = false;

 onCountChanged(newCount: boolean) {
  this.count = newCount;
}
ngOnInit():void{
  if(localStorage.getItem('data')==null){
    this.router.navigate(['login'])
    this.boolDesplayed=false;

  }else{
    this.boolDesplayed=true;
  }
}
}
