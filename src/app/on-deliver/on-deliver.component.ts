import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/auth/services/auth.service';
import { OrdersService } from '../orders/services/orders.service';
import { Order } from '../shared/interfaces/order';
import { Waiting } from '../shared/interfaces/waiting';
import {faPhone} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-on-deliver',
  templateUrl: './on-deliver.component.html',
  styleUrls: ['./on-deliver.component.scss']
})
export class OnDeliverComponent {
  constructor(private router: Router, private authService: AuthService, private activatedRoute: ActivatedRoute, private service: OrdersService) { }
  onDelivarig: any = ''
  faPhone=faPhone
  laoding: boolean = true;

  goTo(param: any) {
    if (param != 'orders') {
      this.authService.updateStatus(param, this.onDelivarig.data.id).subscribe(res => {
        console.log(res)
      })
    }
    this.router.navigate(['orders'])
    // this.authService.updateStatus(param,this.dataArrayForApi[i].id).subscribe((res:any)=>{
    //   console.log(res);
    // },(err:any)=>{
    //   console.log(err.message);
    // })
  }
  ngOnInit(): void {
    this.laoding = true
    this.authService.getDataByStatus('onDelivering').subscribe((res: any) => {
      this.laoding = false
      this.onDelivarig = res
      console.log(res)
    }, (error: any) => {
      this.laoding = false

      console.log('this is error message', error)
    })
    // "status",
    // ['onDelivering', 'delivered', 'cancelled', 'waiting', 'returned']
    // this.service.getData('allorders').subscribe((res:any)=>{
    //   this.onDelivarig=res.filter((p:any)=>p.status=="allorders")
    //   console.log(res)
    //   console.log(this.onDelivarig)

    // },(err:any)=>{
    //   console.log(err.message)
    // })
  }

  // getOrders(){
  //   this.service.getAllOrders().subscribe((res:any) => {
  //   this.dataArrayForApi=res
  //   /// to check if id is an exest within or you wont all orsers accepts from api
  //   if(this.activatedRoute.snapshot.paramMap.get('id')){
  //   this.currentArrayOfData= this.dataArrayForApi.find(i => i.id==(this.activatedRoute.snapshot.paramMap.get('id')||1))
  //   this.dataApi.push(this.currentArrayOfData)
  //   }else{
  //     this.dataApi=this.dataArrayForApi
  //   }
  //   console.log(this.activatedRoute.snapshot.paramMap.get('id'),this.dataArrayForApi)
  //   })
  //   }
}
