import { Component } from '@angular/core';
import { AuthService } from './shared/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router , private authService:AuthService){}
  title = 'dilevary';
  boolDesplayed: boolean=false;
  ngOnInit():void{
    // if(!this.authService.isAuthenticated()){
    //   this.boolDesplayed=false;
    //   this.router.navigate(['login'])
    // }else{
    //   this.boolDesplayed=true;
    // }

  }

}
