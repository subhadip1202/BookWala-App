import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CategorydetailsComponent } from './categorydetails/categorydetails.component';


@NgModule({
  declarations: [
    ProductdetailsComponent,
    CategorydetailsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
