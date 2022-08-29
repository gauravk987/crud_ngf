import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShowService } from './show.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cp1Component } from './cp1/cp1.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    Cp1Component,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
