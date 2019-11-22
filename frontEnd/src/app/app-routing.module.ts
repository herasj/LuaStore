import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ HomeComponent } from './home/home.component'; 
import{ ShopcartComponent } from './shopcart/shopcart.component'; 
import{ RegistrationComponent } from './registration/registration.component'; 
import { SearchingComponent } from './searching/searching.component'
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shoppingCart', component: ShopcartComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'search', component: SearchingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
