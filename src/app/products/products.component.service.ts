import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  public getProducts(search: string): Observable<any>{
    let params = new HttpParams();
    params = params.append('search', search);

    return this.httpClient.get("/api/products", {params: params});
  }
}
