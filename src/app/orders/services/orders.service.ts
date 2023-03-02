import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  //dependances ingections
  constructor(private http: HttpClient) { }
  getAllOrders(): Observable<any> {
   return this.http.get('https://fakestoreapi.com/products');
  }
}
