import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
constructor(private router :Router){}
goTo(params:any){
  this.router.navigate([params]);
}
ngOnInit():void{
  if(localStorage.getItem('data')==null){
    this.router.navigate(['login'])
  }
}
}
