import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AllProducatsComponent } from './components/all-producats/all-producats.component';
import { ProducatsDetailsComponent } from './components/producats-details/producats-details.component';
// import { BrowserModule } from '@angular/platform-browser';
 import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';



@NgModule({
  declarations: [
    // AllProducatsComponent,
    ProducatsDetailsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    HttpClientModule

  ]
})
export class ProducatsModule { }
