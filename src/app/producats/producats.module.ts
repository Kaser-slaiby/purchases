import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProducatsComponent } from './components/all-producats/all-producats.component';
import { ProducatsDetailsComponent } from './components/producats-details/producats-details.component';



@NgModule({
  declarations: [
    AllProducatsComponent,
    ProducatsDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProducatsModule { }
