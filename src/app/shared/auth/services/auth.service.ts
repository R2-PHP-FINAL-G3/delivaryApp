import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { DataService } from '../../services/data/data.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  test = false;
  message: String = ''
  token = localStorage.getItem('token');

  constructor(private http: HttpClient, private dataService: DataService) { }

  login(userName: string, password: string): Observable<any> {
    // console.log("test"+this.http.post('https://fakestoreapi.com/auth/login',{userName,password}).subscribe)
    return this.http.post(environment.baseAPI + 'deliverystaff/login', { 'userName': userName, 'password': password })
  }
  logout() {

    return this.http.post(environment.baseAPI + 'delivery/logout', {
      Headers:new HttpHeaders({

        'authorization': `Bearer ${this.token}`
    })
    })
  }
  // allOrders():Observable<any>{
  //   return this.http.post(environment.baseAPI+'allOrders',{'token':this.token,'message':this.message})

  // }

  updateStatus(prop: string, id: string) {


    return this.http.get<any>(`${environment.baseAPI}order/update/${id}/${prop}`)

  }
  getDataByStatus(Status: String) {
    return this.http.get(environment.baseAPI + 'orders/' + Status );
  }
  deliveryUpdateData(email: any, motorCycleNumber: any, password: any, phone: any, userName: any, id: any) {
    let body = {
      'email': email, 'motorCycleNumber': motorCycleNumber, 'password': password, 'phone': phone, 'userName': userName
    }

    return this.http.put(`${environment.baseAPI}delivery/update/${id}`, body)
  }
  inf(): Observable<any> {
    return this.http.get(
      environment.baseAPI + 'delivery/info'
    )
  }

  isAuthenticated(): boolean {
    this.token = localStorage.getItem('token');
    return this.token !== null;
    // return true
  }
}
