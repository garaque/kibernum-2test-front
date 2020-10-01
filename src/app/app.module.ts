import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ProductsComponent } from './components/products/products.component';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { LayoutModule } from './layout/layout.module';
import { ShoppingcartComponent } from './car/shoppingcart/shoppingcart.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    ProductsComponent,
    PurchasesComponent,
    ShoppingcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
