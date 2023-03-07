import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-on-deliver',
  templateUrl: './on-deliver.component.html',
  styleUrls: ['./on-deliver.component.scss']
})
export class OnDeliverComponent {
constructor (private router: Router , private authService :AuthService){}
goTo(param:any) {
this.router.navigate([param])
}
ngOnInit():void{
  if(!this.authService.isAuthenticated()){
    this.router.navigate(['login'])
  }
}
}
