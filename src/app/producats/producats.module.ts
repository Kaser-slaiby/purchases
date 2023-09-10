import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProducatsComponent } from './components/all-producats/all-producats.component';
import { ProducatsDetailsComponent } from './components/producats-details/producats-details.component';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AllProducatsComponent,
    ProducatsDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    // HttpClientModule

  ]
})
export class ProducatsModule { }
