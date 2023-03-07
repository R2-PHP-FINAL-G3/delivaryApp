import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from './services/orders.service';
import { Order } from '../interfaces/order';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit  {
constructor(private router: Router, private service:OrdersService ,private authService :AuthService){}
laoding:boolean = false;
@Input() dataArrayForApi:Order[]=[
  {id:'1',title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}
];
goTo(param:any,i:any){

  // this.router.navigate([param,this.dataArrayForApi[i].id])
  this.routingForParamOrNot(param,this.dataArrayForApi[i].id)
  console.log(this.dataArrayForApi[i].id)
}

ngOnInit():void{
  if(!this.authService.isAuthenticated()){
    this.router.navigate(['login'])
  }
      else{
  this.getOrders();
  console.log(this.authService.isAuthenticated())
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

    // console.log(res);
    this.dataArrayForApi=res
    // console.log(this.dataArrayForApi)
  }
,
(error:any)=>{
  console.log( error.message);
  this.laoding=false

},

  )

}
}
