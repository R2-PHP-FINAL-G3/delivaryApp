import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from './services/orders.service';
import { Order } from '../../shared/interfaces/order';
import { AuthService } from '../../shared/auth/services/auth.service';
import { Waiting } from '../../shared/interfaces/waiting';
import { UserService } from '../../shared/services/userData/user.service';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  FontAwesome = {
    faPenToSquare: faPenToSquare,
    faTrash: faTrash,
    faPhone: faPhone,
    faMoneyBill1Wave: faMoneyBill1Wave,
  }

  constructor(private router: Router, private service: OrdersService
    , private authService: AuthService, private userService: UserService) { }
  laoding: boolean = true;

  allDataArrayForApi: Waiting | undefined
  message: string = ''
  dataArrayForApi: any = ''
  goTo(param: any, i: any) {

    // this.router.navigate([param,this.dataArrayForApi[i].id])
    this.authService.updateStatus(param, this.dataArrayForApi[i].id).subscribe((res: any) => {
      console.log(res);
    }, (err: any) => {
      // console.log(err.message);
    })
    const date = new Date();
    localStorage.setItem('date',JSON.stringify( {getFullYear:date.getFullYear(),getDay:date.getDay(),getHours:date.getHours(),getMinutes:date.getMinutes(),getSeconds:date.getSeconds(),allMinutes:(date.getHours()*60)+date.getMinutes()}))
    // this.routingForParamOrNot(param)

    this.router.navigate([param])
  }

  ngOnInit(): void {

    this.getOrders();
    // console.log(this.authService.isAuthenticated())
    // console.log('token', this.userService.getUserData())
    // console.log(this.userService.getUserData())
  }
  ///take one or more parameters
  routingForParamOrNot(...prop: any) {
    if ((prop[0] !== null)) {

      (prop[1] !== null) ? this.router.navigate([prop[0], prop[1]]) : this.router.navigate([prop[0]]);
    }
    else {
      console.log('router.navigate error')
    }
  }
  //
  getOrders() {
    this.laoding = true
    this.service.getAllOrders().subscribe((res: any) => {
      this.laoding = false
      this.dataArrayForApi = res.data
      this.allDataArrayForApi = res
      this.message = res.message
      // console.log("aaarrray",res);
      // this.dataArrayForApi=res.filter((a:any) => { return a.status == "waiting"})
      // console.log(this.dataArrayForApi)

    }
      ,
      (error: any) => {

        this.laoding = false
        this.message = error.error.message
        error.status == 406 ? setTimeout(() => this.router.navigate(['onDelivering']), 3000) : ''
        // console.log('get all',error)
      },

    )

  }
  // pusher(){
  //   const pusher = new Pusher('APP_KEY', {
  //     cluster: 'CLUSTER',
  //     encrypted: true,
  //   });

  // }

}
