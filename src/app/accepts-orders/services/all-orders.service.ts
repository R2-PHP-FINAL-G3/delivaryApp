import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AllOrdersService {

  constructor(private http: HttpClient) { }
getAllOrders(){
  
  return this.http.get(`${environment.baseAPI}products`) 
} 
postData(data: any){
  this.http.post(`${environment.baseAPI}products`, data)
}

};                                                        
