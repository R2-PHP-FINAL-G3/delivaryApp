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
 @Input() dataArrayForApi :any =[
  {
    "id": 1,
    "created_at": "2023-03-08T11:48:22.000000Z",
    "updated_at": "2023-03-08T11:48:22.000000Z",
    "invoiceCode": "1234",
    "companyId": 5,
    "deliveryGuyId": null,
    "isPaid": 1,
    "delivaryFees": "1.000",
    "status": "waiting",
    "city": "maa",
    "street": "ds2",
    "buildingNumber": "1",
    "floorNumber": "2",
    "apartmentNumber": "1",
    "totalPrice": "1234.00000",
    "orderDate": "2023-02-02 00:00:00",
    "clientName": "zaater",
    "clientPhone": "1234567890"

}];
goTo(param:any,i:any){

  // this.router.navigate([param,this.dataArrayForApi[i].id])
  this.routingForParamOrNot(param,this.dataArrayForApi[i].id)
  // console.log(this.dataArrayForApi[i].id)
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
    console.log("aaarrray",res);
    // this.dataArrayForApi=res.filter((a:any) => { return a.status == "waiting"})
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
