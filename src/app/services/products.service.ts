import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseEndpoint = 'http://localhost:8080/api/products';
  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) {

  }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseEndpoint);
  }

  public findByID(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseEndpoint}/${id}`);
  }

  public save(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseEndpoint, product, { headers: this.headers});
  }

  public update(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseEndpoint}/${product.id}`, product,
    { headers: this.headers});
  }
}
