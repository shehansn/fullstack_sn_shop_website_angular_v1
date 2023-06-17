import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListPageComponent } from 'libs/products/src/lib/pages/product-list-page/product-list-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'products', component: ProductListPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
