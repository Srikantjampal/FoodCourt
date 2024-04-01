import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../shared/models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient ) { }

  create(order:Order){
    return this.http.post<Order>('http://localhost:5000/api/orders/create', order);
  }

  getNewOrderForCurrentUser():Observable<Order>{
    return this.http.get<Order>('http://localhost:5000/api/orders/newOrderForCurrentUser');
  }

  pay(order:Order):Observable<string>{
    return this.http.post<string>('http://localhost:5000/api/orders/pay/',order);
  }

  trackOrderById(id:number): Observable<Order>{
    return this.http.get<Order>('http://localhost:5000/api/orders/track/' + id);
  }

}



