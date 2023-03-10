import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  hashing: string ='test';

  constructor(private router: Router) { }
//

  url:string='http://127.0.0.1:8000/api/'

  routerLinkWithIsAuth(prop:string){
    if(localStorage.getItem('4YCgix4J1K9uEm')!=null){
     this.router.navigate([prop])

    }else{ 
          this.router.navigate(['/login'])
    }
  }
  hash(){

  this.hashing = this.makeid(5)+Math.floor((Math.random() * 100) )+this.makeid(5);
  }
   makeid(length:any) {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result;
  }

}
