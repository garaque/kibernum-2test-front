import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Purchase } from '../models/purchase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {

  private baseEndpoint = 'http://localhost:8080/api/purchases';
  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) {

  }

  public findAll(): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(this.baseEndpoint);
  }

  public findByID(id: number): Observable<Purchase> {
    return this.http.get<Purchase>(`${this.baseEndpoint}/${id}`);
  }

  public save(purchase: Purchase): Observable<Purchase> {
    return this.http.post<Purchase>(this.baseEndpoint, purchase, { headers: this.headers});
  }
}
