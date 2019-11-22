import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './slider/slider.component';
import { CardComponent } from './card/card.component';
import {NgxTinySliderModule} from 'ngx-tiny-slider';
import { InstafeedComponent } from './instafeed/instafeed.component';
import { ProductComponent } from './product/product.component';
import { ShopcartComponent } from './shopcart/shopcart.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchingComponent } from './searching/searching.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    SearchbarComponent,
    SliderComponent,
    CardComponent,
    InstafeedComponent,
    ProductComponent,
    ShopcartComponent,
    RegistrationComponent,
    SearchingComponent
  ],
  exports:[
    NgxTinySliderModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxTinySliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
