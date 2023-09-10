import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
// import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    BrowserModule,
    // ReactiveFormsModule
  ],

  //////for to see in app.module.ts with out import
  exports: [
    HeaderComponent,
    // CommonModule,
    // RouterModule
  ],

})
/////for import in app.module.ts
export class SharedModule { }
