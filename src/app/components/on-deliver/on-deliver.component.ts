import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../shared/auth/services/auth.service';
import { OrdersService } from '../orders/services/orders.service';
import { Order } from '../../shared/interfaces/order';
import { Waiting } from '../../shared/interfaces/waiting';
import { faPhone } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-on-deliver',
  templateUrl: './on-deliver.component.html',
  styleUrls: ['./on-deliver.component.scss']
})
export class OnDeliverComponent {
  started=JSON.parse(localStorage.getItem('date')||'')
  //  started=localStorage.getItem("date")?JSON.parse(localStorage.getItem("date")):''
  showDate:any
  getHours:number =1
  constructor(private router: Router, private authService: AuthService, private activatedRoute: ActivatedRoute, private service: OrdersService) { }
  onDelivarig: any = ''
  faPhone = faPhone
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
      setInterval(() => {
        const showDate = new Date();
        this.getHours=Number( (showDate.getHours()*60))+Number( showDate.getMinutes())
        this.showDate = new Date();
      }, 1000)

    }, (error: any) => {
      this.laoding = false

      console.log('this is error message', error)
    })

  }

}
