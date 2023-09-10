import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        // HttpClientModule,   
        AppRoutingModule,
        SharedModule,
        BrowserModule,
        CommonModule
    ]
})
export class AppModule { }
