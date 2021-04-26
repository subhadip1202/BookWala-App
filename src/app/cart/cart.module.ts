import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartdetailsComponent } from './cartdetails/cartdetails.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';


@NgModule({
  declarations: [
    CartdetailsComponent,
    OrderdetailsComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
