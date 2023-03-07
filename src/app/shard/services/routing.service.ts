import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router: Router) { }
//

  url:string='http://127.0.0.1:8000/api/'

  ifMaintnableByURL(prop:string){
    if(localStorage.getItem('data')==null){
      this.router.navigate(['/login'])
    }else{
    this.router.navigate([prop])
    }
  }
}
