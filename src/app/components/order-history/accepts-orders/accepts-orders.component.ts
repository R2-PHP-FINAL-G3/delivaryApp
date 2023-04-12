import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../../../shared/interfaces/order'
import { AllOrdersService } from './services/all-orders.service';
import { AuthService } from '../../../shared/auth/services/auth.service';
import { DataService } from '../../../shared/services/data/data.service';
@Component({
  selector: 'app-accepts-orders',
  templateUrl: './accepts-orders.component.html',
  styleUrls: ['./accepts-orders.component.scss']
})
export class AcceptsOrdersComponent {
  val: any[] = [];
  laoding: boolean = false;
  currentArrayOfData: Order | undefined;
  arrayFeeses: any;
  sumFeeses = 0
  length_returned = Number(localStorage.getItem('length of returned'))
  constructor(private router: Router, private service: AllOrdersService, private activatedRoute: ActivatedRoute, private dataService: DataService, private authService: AuthService) { }
  dataArrayForApi: Order[] = [
    {
      "id": 1,
      "created_at": 'string',
      "updated_at": 'string',
      "invoiceCode": 'string',
      "companyId": 1,
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
  dataApi: any = ''

  // git data from local storage
  dataFromlocalStorage: any[] = [];

  backTo(prop: any) {
    this.dataService.routerLinkWithIsAuth(prop)

  }
  getOrders() {
    this.laoding = true

    this.authService.getDataByStatus('delivered').subscribe((res: any) => {
      this.laoding = false

      this.dataArrayForApi = res.data
      this.arrayFeeses = res.data.map((res: any) => this.sumFeeses += parseInt(res.delivaryFees))
      localStorage.setItem('sumFeeses', JSON.stringify(this.sumFeeses))
      // console.log(res.data)
      /// to check if id is an exest within or you wont all orsers accepts from api
      if (this.activatedRoute.snapshot.paramMap.get('id')) {
        this.currentArrayOfData = this.dataArrayForApi.find(i => i.id == (this.activatedRoute.snapshot.paramMap.get('id') || 1))
        this.dataApi.push(this.currentArrayOfData)
      } else {
        this.dataApi = this.dataArrayForApi
      }
      // console.log(this.activatedRoute.snapshot.paramMap.get('id'), this.dataArrayForApi)
    })
  }



  ngOnInit(): void {

    this.getOrders();
  }
}
