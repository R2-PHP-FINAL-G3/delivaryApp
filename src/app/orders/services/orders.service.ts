import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../interfaces/order';
import { environment } from 'src/environments/environment';
import { RoutingService } from '../../shard/services/routing.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  //dependances ingections
  constructor(private http: HttpClient, private routing:RoutingService) { }
  getAllOrders(): Observable<any> {
   return this.http.get(`${this.routing.url}products`);
  }
}
