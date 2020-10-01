import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private baseEndpoint = 'http://localhost:8080/api/customers';
  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) {

  }

  public findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseEndpoint);
  }

  public findByID(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.baseEndpoint}/${id}`);
  }

  public save(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.baseEndpoint, customer, { headers: this.headers});
  }

  public checkCredentials(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.baseEndpoint}/check`, customer,
    { headers: this.headers});
  }
}
