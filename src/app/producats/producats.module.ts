import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProducatsComponent } from './components/producats/producats.component';
import { AllProducatsComponent } from './components/all-producats/all-producats.component';
import { ProducatsDetailsComponent } from './components/producats-details/producats-details.component';



@NgModule({
  declarations: [
    ProducatsComponent,
    AllProducatsComponent,
    ProducatsDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProducatsModule { }
