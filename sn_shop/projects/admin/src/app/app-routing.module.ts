import { Product } from './../../../../libs/products/src/lib/models/products';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shared/shell/shell.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CategoriesListComponent } from './pages/categories/categories-list/categories-list.component';
import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { OrdersListComponent } from './pages/orders/orders-list/orders-list.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { ProductsFormComponent } from './pages/products/products-form/products-form.component';

const routes: Routes = [{

  path: '',
  component: ShellComponent,
  children: [
    {
      path: '',
      component: DashboardComponent
    },
    {
      path: 'products',
      component: ProductsListComponent
    },
    {
      path: 'products/form',
      component: ProductsFormComponent
    },
    {
      path: 'products/form/:id',
      component: ProductsFormComponent
    },
    {
      path: 'categories',
      component: CategoriesListComponent
    },
    {
      path: 'categories/form',
      component: CategoriesFormComponent
    },
    {
      path: 'categories/form/:id',
      component: CategoriesFormComponent
    },

    {
      path: 'orders',
      component: OrdersListComponent
    },
    {
      path: 'users',
      component: UsersListComponent
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
