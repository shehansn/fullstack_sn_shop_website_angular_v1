import { Product } from '../../../../libs/products/src/lib/models/product';
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
import { UsersFormComponent } from './pages/users/users-form/users-form.component';
import { OrdersDetailsComponent } from './pages/orders/orders-details/orders-details.component';
import { AuthGuardService } from 'libs/users/src/lib/services/auth-guard.service';
import { UsersModule } from 'libs/users/src/lib/users.module';

const routes: Routes = [{

  path: '',
  component: ShellComponent,
  //canActivate: [AuthGuardService],
  canActivateChild: [AuthGuardService],
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
      path: 'orders/:id',
      component: OrdersDetailsComponent
    },
    {
      path: 'users',
      component: UsersListComponent
    },
    {
      path: 'users/form',
      component: UsersFormComponent
    },
    {
      path: 'users/form/:id',
      component: UsersFormComponent
    },

  ]
},
{
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), UsersModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
