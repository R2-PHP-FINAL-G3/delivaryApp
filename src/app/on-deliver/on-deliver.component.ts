import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-on-deliver',
  templateUrl: './on-deliver.component.html',
  styleUrls: ['./on-deliver.component.scss']
})
export class OnDeliverComponent {
constructor (private router: Router , private authService :AuthService ,private activatedRoute :ActivatedRoute){}
goTo(param:any) {
this.router.navigate([param])
// this.authService.updateStatus(param,this.dataArrayForApi[i].id).subscribe((res:any)=>{
//   console.log(res);
// },(err:any)=>{
//   console.log(err.message);
// })
}
ngOnInit():void{
  if(!this.authService.isAuthenticated()){
    this.router.navigate(['login'])
  }
  else{
    
  }
}

}
