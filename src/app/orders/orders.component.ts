import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from './services/orders.service';
import { Order } from '../interfaces/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit  {
constructor(private route: Router, private service:OrdersService){}
laoding:boolean = false;
@Input() dataArrayForApi:Order[]=[
  {id:'1',title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}
];
goTo(param:any,i:any){

  // this.route.navigate([param,this.dataArrayForApi[i].id])
  this.routingForParamOrNot(param,this.dataArrayForApi[i].id)
  console.log(this.dataArrayForApi[i].id)
}

ngOnInit():void{
  this.getOrders();

}
///
routingForParamOrNot(...prop:any){
  if((prop[0]!==null)){

   (prop[1]!==null)? this.route.navigate([prop[0],prop[1]]):this.route.navigate([prop[0]]);
  }
else{
    console.log('route.navigate error')
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
// ()=>{
//   console.log('complete');
// }
  )
//   this.service.getAllOrders().subscribe(
//     (    data: any) => { this.data = data },
//     (error:any) => { console.log('error: ', error)},
//     () => { console.log('complete ', "compelete"); });
// }
}
}
