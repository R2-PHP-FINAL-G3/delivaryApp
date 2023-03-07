import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rejects-orders',
  templateUrl: './rejects-orders.component.html',
  styleUrls: ['./rejects-orders.component.scss']
})
export class RejectsOrdersComponent {

   constructor(private router: Router){}

  ngOnInit() :void {
    if(localStorage.getItem('data')==null){
    this.router.navigate(['login'])}
    }  
}
