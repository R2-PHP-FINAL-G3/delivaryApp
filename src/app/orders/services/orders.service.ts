import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../interfaces/order';
import { environment } from 'src/environments/environment';
import { RoutingService } from '../../shard/services/routing.service';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  token=localStorage.getItem('4YCgix4J1K9uEm')||''
  companyId=JSON.parse( localStorage.getItem('data')||'').companyId
  message: any='';
  //dependances ingections
  constructor(private http: HttpClient, private routing:RoutingService ,private authService: AuthService) { }
  //put the token on header for general

  //////////
  getAllOrders(): Observable<any> {
    // return this.http.get(environment.baseAPI+'allOrders')
    const httpOptions= {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    };
      return this.http.get<Order>(`${environment.baseAPI}orders/waiting`, httpOptions);
    }
  
  getData(prop:string): Observable<Order> {
 const httpOptions= {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })
  };
    return this.http.get<Order>(`${environment.baseAPI+prop}`, httpOptions);
  }


}
