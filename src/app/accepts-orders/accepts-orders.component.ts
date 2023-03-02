import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Order} from '../interfaces/order'
import { AllOrdersService } from './services/all-orders.service';
import {LocalStorageService} from '../services/local-storage.service';
@Component({
  selector: 'app-accepts-orders',
  templateUrl: './accepts-orders.component.html',
  styleUrls: ['./accepts-orders.component.scss']
})
export class AcceptsOrdersComponent {
  val:any[]=[];
constructor(private router: Router , private service:AllOrdersService,private activatedRoute :ActivatedRoute , private localStorageService:LocalStorageService){}
@Input() dataArrayForApi:Order[]=[
  {id:'1',title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}
];
@Input() dataApi:any[]=[
];
// git data from local storage
@Input() dataFromlocalStorage:any[]= [];
///
goTo(prop:any,i:any){
  
  this.router.navigate([prop,this.dataArrayForApi[i].id])
}
backTo(prop:any){
  this.router.navigate([prop])
}
/// api data from service accepts orders
getOrders(){
this.service.getAllOrders().subscribe((res:any) => {
this.dataArrayForApi=res
 const currentArrayOfData= this.dataArrayForApi.find(i => i.id==this.activatedRoute.snapshot.paramMap.get('id'))
this.dataApi.push(currentArrayOfData)
})
}
// setValue() {
// console.log(JSON.stringify( this.dataApi))
//   this.localStorageService.setItem('myKey', JSON.stringify( this.dataApi));
// }

// getValue() {
//   const value = this.localStorageService.getItem('myKey');
//   console.log(value);
// }



ngOnInit(): void {
this.getOrders();
// this.setValue();
// this.getValue();
}
}
