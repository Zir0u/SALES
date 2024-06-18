import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product} from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductSevices {
  constructor(private http : HttpClient) { }

   getAllproducts():Observable<Product[]>{
    return this.http.get<Product[]>(
      'http://localhost:5274/api/Product'

    );
  }

}
