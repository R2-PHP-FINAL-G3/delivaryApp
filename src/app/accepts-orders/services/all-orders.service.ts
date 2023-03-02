import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllOrdersService {

  constructor(private http: HttpClient) { }
getAllOrders(){
  return this.http.get('https://fakestoreapi.com/products')
}
}
