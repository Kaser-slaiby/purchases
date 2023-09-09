import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProducatsService {

  constructor(private http:HttpClient) {}

    getAllproducts() {
      return this.http.get('https://fakestoreapi.com/products')
    }
   }

