import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from './carts/components/carts/carts.component';
import { AllProducatsComponent } from './producats/components/all-producats/all-producats.component';
import { ProducatsDetailsComponent } from './producats/components/producats-details/producats-details.component';

const routes: Routes = [
  ////add Routs for path
  {path:"products", component:AllProducatsComponent},
  {path:"deatils", component:ProducatsDetailsComponent},
  {path:"cart", component:CartsComponent},
  ///path for erorr
  {path:"**", redirectTo:"products", pathMatch:"full"}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule,
    FormsModule
  
  ],
  declarations: [
    AllProducatsComponent
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
