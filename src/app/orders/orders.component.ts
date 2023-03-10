import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from './services/orders.service';
import { Order } from '../interfaces/order';
import { AuthService } from '../auth/auth.service';
import { Waiting } from '../interfaces/waiting';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit  {
constructor(private router: Router, private service:OrdersService ,private authService :AuthService){}
laoding:boolean = false;

allDataArrayForApi:Waiting | undefined
message:string =''
 @Input() dataArrayForApi :any =''
goTo(param:any,i:any){

  // this.router.navigate([param,this.dataArrayForApi[i].id])
   this.authService.updateStatus(param,this.dataArrayForApi[i].id).subscribe((res:any)=>{
    console.log(res);
  },(err:any)=>{
    console.log(err.message);
  })

  this.routingForParamOrNot(param,this.dataArrayForApi[i].id)
  console.log(this.dataArrayForApi[i].id)
}

ngOnInit():void{
  if(!this.authService.isAuthenticated()){
    this.router.navigate(['login'])
  }
      else{
  this.getOrders();
  // console.log(this.authService.isAuthenticated())
    }
}
///take one or more parameters
routingForParamOrNot(...prop:any){
  if((prop[0]!==null)){

   (prop[1]!==null)? this.router.navigate([prop[0],prop[1]]):this.router.navigate([prop[0]]);
  }
else{
    console.log('router.navigate error')
  }
}
//
getOrders(){
  this.laoding=true
  this.service.getAllOrders().subscribe((res: any) =>{
    this.laoding=false
    this.dataArrayForApi=res.data
    this.allDataArrayForApi=res
    this.message=res.message
    // console.log("aaarrray",res);
    // this.dataArrayForApi=res.filter((a:any) => { return a.status == "waiting"})
    // console.log(this.dataArrayForApi)

  }
,
(error:any)=>{
 
  this.laoding=false
  this.message=error.error.message
  error.status==406?setTimeout(()=>this.router.navigate(['onDelivering']), 3000):''
// console.log('get all',error)
},

  )

}
}
