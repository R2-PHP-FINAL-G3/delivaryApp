import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-on-deliver',
  templateUrl: './on-deliver.component.html',
  styleUrls: ['./on-deliver.component.scss']
})
export class OnDeliverComponent {
constructor (private router: Router){}
goTo(param:any) {
this.router.navigate([param])
}
ngOnInit():void{
  if(localStorage.getItem('data')==null){
    this.router.navigate(['login'])
  }
}
}
