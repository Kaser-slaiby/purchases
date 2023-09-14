import { Component, OnInit } from '@angular/core';
import { ProducatsService } from '../../services/producats.service';

@Component({
  selector: 'app-all-producats',
  templateUrl: './all-producats.component.html',
  styleUrls: ['./all-producats.component.scss']
})
export class AllProducatsComponent implements OnInit {

  products:any[] = []
  categories: any [] = []
  loading:boolean = false
  constructor(private service:ProducatsService) {}
  

  ngOnInit() :void {
    this.getProducts()
    this.getCategories()
  }

  getProducts() {
    this.loading = true
    this.service.getAllProducts().subscribe((res:any) => {
    this.products = res 
    // console.log(res)
    this.loading = false 
  })
  }

  getCategories() {
    this.loading = true
    this.service.getAllCategories().subscribe((res:any) => {
    this.categories = res 
    // console.log(res)
    this.loading = false
  })
  }
////////////////Start fun  for services getProductsByCategories
  fillterCategory(event:any) {
    let value = event.target.value;
    if(value == "All") {
      this.getProducts()
    }
    else {
      this.getProductsCategories(value)
      // console.log(value)
    }
  
  }
  getProductsCategories(keyword:string) {
    this.loading = true
    this.service.getProductsByCategories(keyword).subscribe((res:any) => {
    this.products =res  
    this.loading = false
    })
  }
////////////////End fun  for services getProductsByCategories


}
