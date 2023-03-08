import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Order} from '../interfaces/order'
import { AllOrdersService } from './services/all-orders.service';
import {LocalStorageService} from '../services/local-storage.service';
import { RoutingService } from '../shard/services/routing.service';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-accepts-orders',
  templateUrl: './accepts-orders.component.html',
  styleUrls: ['./accepts-orders.component.scss']
})
export class AcceptsOrdersComponent {
  val:any[]=[];
  currentArrayOfData: Order | undefined;
constructor(private router: Router , private service:AllOrdersService,private activatedRoute :ActivatedRoute , private localStorageService:LocalStorageService, private routing:RoutingService , private authService :AuthService){}
@Input() dataArrayForApi:Order[]=[
  {
    "id": 1,
    "created_at": 'string',
    "updated_at": 'string',
    "invoiceCode": 'string',
    "companyId": 1,
    "deliveryGuyId":JSON.parse( localStorage.getItem('4YCgix4J1K9uEm')||'1'),
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
@Input() dataApi:any[]=[
];
@Input()
// git data from local storage
@Input() dataFromlocalStorage:any[]= [];
///
goTo(prop:any,i:any){
  if(localStorage.getItem('data')==null){
    this.router.navigate(['/login'])
  }else{
  this.router.navigate([prop,this.dataArrayForApi[i].id])
  }
}
backTo(prop:any){
this.routing.ifMaintnableByURL(prop)
  // this.router.navigate([prop])

}
/// api data from service accepts orders
getOrders(){
this.service.getAllOrders().subscribe((res:any) => {
this.dataArrayForApi=res
/// to check if id is an exest within or you wont all orsers accepts from api
if(this.activatedRoute.snapshot.paramMap.get('id')){
this.currentArrayOfData= this.dataArrayForApi.find(i => i.id==(this.activatedRoute.snapshot.paramMap.get('id')||1))
this.dataApi.push(this.currentArrayOfData)
}else{
  this.dataApi=this.dataArrayForApi
}
console.log(this.activatedRoute.snapshot.paramMap.get('id'),this.dataArrayForApi)
})
}



ngOnInit(): void {
  if(!this.authService.isAuthenticated()){
    this.router.navigate(['login'])
  }
   else {this.getOrders();}

}
}
