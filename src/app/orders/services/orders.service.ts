import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../shared/interfaces/order';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../shared/auth/services/auth.service';
import { DataService } from 'src/app/shared/services/data/data.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  token = localStorage.getItem('token') || ''
  //dependances ingections
  constructor(private http: HttpClient, private dataService: DataService, private authService: AuthService) { }
  //put the token on header for general

  //////////
  getAllOrders(): Observable<any> {
    // return this.http.get(environment.baseAPI+'allOrders')
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    };
    return this.http.get<Order>(`${environment.baseAPI}orders/waiting`, httpOptions);
  }

  getData(prop: string): Observable<Order> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    };
    return this.http.get<Order>(`${environment.baseAPI + prop}`, httpOptions);
  }


}
