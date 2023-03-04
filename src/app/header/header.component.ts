import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
constructor(private router :Router){}
bool:boolean=false
goTo(param:any){
  this.router.navigate([param]);
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
}
