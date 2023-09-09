import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProducatsComponent } from './components/producats/producats.component';
import { AllProducatsComponent } from './components/all-producats/all-producats.component';



@NgModule({
  declarations: [
    ProducatsComponent,
    AllProducatsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProducatsModule { }
