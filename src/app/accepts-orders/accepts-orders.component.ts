import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accepts-orders',
  templateUrl: './accepts-orders.component.html',
  styleUrls: ['./accepts-orders.component.scss']
})
export class AcceptsOrdersComponent {
constructor(private router: Router){

}
goTo(prop:any){
  this.router.navigate([prop])
}
}
