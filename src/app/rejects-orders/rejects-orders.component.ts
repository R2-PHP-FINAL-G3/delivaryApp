import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/services/auth.service';
import { OrdersService } from '../orders/services/orders.service';

@Component({
  selector: 'app-rejects-orders',
  templateUrl: './rejects-orders.component.html',
  styleUrls: ['./rejects-orders.component.scss']
})
export class RejectsOrdersComponent {
  respose: any = '';
  errorMessage: any
  sumFeeses=0;
  arrayFeeses: any;
  // data=JSON.parse(localStorage.getItem('4YCgix4J1K9uEm')||'').companyId||'5'
  constructor(private router: Router, private authService: AuthService) { }


  ngOnInit(): void {
      this.authService.getDataByStatus('returned').subscribe((res: any) => {
        console.log(res);
        this.respose = res.data
        this.arrayFeeses = res.data.map((res: any) => this.sumFeeses +=parseInt(res.delivaryFees))
        localStorage.setItem("length of returned", this.respose.length)
      }, (err: any) => {
        this.errorMessage = err.error.message
      })

  }

}
