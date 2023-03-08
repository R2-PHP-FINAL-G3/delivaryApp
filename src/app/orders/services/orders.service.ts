import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../interfaces/order';
import { environment } from 'src/environments/environment';
import { RoutingService } from '../../shard/services/routing.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  token=localStorage.getItem('4YCgix4J1K9uEm')||''
  companyId=JSON.parse( localStorage.getItem('data')||'').companyId
  message: any='';
  //dependances ingections
  constructor(private http: HttpClient, private routing:RoutingService) { }
  getAllOrders(): Observable<any> {
    // return this.http.get(environment.baseAPI+'allOrders')
    return this.getData(this.token)
  }
  getData(token: string): Observable<Order> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.get<any>(`${environment.baseAPI}orders/waiting`, httpOptions);
  }
}
