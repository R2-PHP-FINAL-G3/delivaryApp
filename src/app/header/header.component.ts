import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
constructor(private router :Router, private auth : AuthService){}
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
