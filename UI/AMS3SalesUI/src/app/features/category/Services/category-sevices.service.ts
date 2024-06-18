import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategorySevicesService {
  constructor(private http : HttpClient) { }

   getAllCategories():Observable<Category[]>{
    return this.http.get<Category[]>(
      'http://localhost:5274/api/Categories'

    );
  }

}
