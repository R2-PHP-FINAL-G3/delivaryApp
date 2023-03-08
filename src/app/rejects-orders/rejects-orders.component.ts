import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-rejects-orders',
  templateUrl: './rejects-orders.component.html',
  styleUrls: ['./rejects-orders.component.scss']
})
export class RejectsOrdersComponent {

   constructor(private router: Router ,private authService:AuthService){}

  ngOnInit() :void {
    if(!this.authService.isAuthenticated()){
    this.router.navigate(['login'])}
    }
}
