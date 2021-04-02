import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  serverUrl = 'http://localhost:3000/api/products';

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.serverUrl);
  }

  /* Deleting Product */
  deleteProduct(prodId: any): Observable<any> {
    return this.httpClient.delete<{ message?: string, status: string }>(`${this.serverUrl}/delete/${prodId}`)
      .pipe(
        switchMap(async (data) => {
          const prods = await this.getAllProducts().toPromise();
          return {
            ...data,
            ...prods
          };
        })
      );
  }
}
