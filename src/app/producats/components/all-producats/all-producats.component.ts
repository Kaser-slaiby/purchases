import { Component, OnInit } from '@angular/core';
import { ProducatsService } from '../../services/producats.service';

@Component({
  selector: 'app-all-producats',
  templateUrl: './all-producats.component.html',
  styleUrls: ['./all-producats.component.scss']
})
export class AllProducatsComponent implements OnInit {

  products:any[] = []
  constructor(private service:ProducatsService) {}

  ngOnInit() :void {
    this.getProducts()
  }

  getProducts() {
    this.service.getAllProducts().subscribe((res:any) => {
    this.products = res 
    // console.log(res)
  })
  }

}
