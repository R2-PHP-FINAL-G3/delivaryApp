import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faCar } from "@fortawesome/free-solid-svg-icons"
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faStreetView } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public FontAwesome={
  faHome : faHome,
  faCar : faCar,
  faThumbsUp : faThumbsUp,
  faStreetView : faStreetView,
  faThumbsDown : faThumbsDown,
  faEnvelope : faEnvelope,
  faUser : faUser,
  faLock : faLock
  }
  boolDesplayed: boolean = false;
  nav: string ='orders';
  constructor(private router: Router, private authService: AuthService) { }
  goTo(param: string) {
    this.router.navigate([param]);
    this.nav=param
  }

   logout() {
  this.authService.logout().subscribe((res:any) => {
    // this.nav='orders'
    console.log('res',res)


  },(err:any)=>{


    console.log('err',err)
  })
  this.router.navigate(['login'])
  localStorage.clear()
  }
  // isLogin(even:boolean){
  // this.bool=even
  // }
  count = false;

  onCountChanged(newCount: boolean) {
    this.count = newCount;
  }
  ngOnInit(): void {


  }
// linksStyle():void{
  
// }
}
