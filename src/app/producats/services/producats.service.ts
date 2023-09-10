import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProducatsService { 

  constructor(private http:HttpClient) {}

    getAllProducts() {
      return this.http.get(environment.baseApi +  'products')
    }
   }

 