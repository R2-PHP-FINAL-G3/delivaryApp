import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AllOrdersService {

  constructor(private http: HttpClient) { }
  getAllOrders() {

    return this.http.get("https://fakestoreapi.com/products")
  }
  postData(data: any) {
    this.http.post("https://fakestoreapi.com/products", data)
  }

};
