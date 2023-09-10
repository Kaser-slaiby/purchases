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
  constructor(private service:ProducatsService) {}
  

  ngOnInit() :void {
    this.getProducts()
    this.getCategories()
  }

  getProducts() {
    this.service.getAllProducts().subscribe((res:any) => {
    this.products = res 
    // console.log(res)
  })
  }

  getCategories() {
    this.service.getAllCategories().subscribe((res:any) => {
    this.categories = res 
    // console.log(res)
  })
  }

}
