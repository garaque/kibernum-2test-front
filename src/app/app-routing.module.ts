import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './components/customers/customers.component';
import { ProductsComponent } from './components/products/products.component';
import { PurchasesComponent } from './components/purchases/purchases.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'purchases'},
  {path: 'customers', component: CustomersComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'purchases', component: PurchasesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
