import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Imports and route configuration
// using the lazy-loading syntax.  loadChildren: () => import
const routes: Routes = [
  {
    path: 'carts',
    loadChildren: () => import('./pages/carts/carts.module').then(m => m.CartsModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./pages/customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch:'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
