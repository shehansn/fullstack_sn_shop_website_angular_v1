import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesBannerComponent } from './components/categories-banner/categories-banner.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductsSearchComponent } from './components/products-search/products-search.component';
import { WhishlistProductsComponent } from './components/whishlist-products/whishlist-products.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { CategoriesService } from '../lib/services/categories.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RatingModule } from 'primeng/rating';
import { InputNumberModule } from 'primeng/inputnumber';

import { UiModule } from "../../../ui/src/lib/ui.module";
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: 'products',
    component: ProductListPageComponent
  },
  {
    path: 'category/:categoryid',
    component: ProductListPageComponent
  },
  {
    path: 'products/:productid',
    component: ProductDetailPageComponent
  }
];

@NgModule({
  declarations: [
    ProductsComponent,
    CategoriesBannerComponent,
    FeaturedProductsComponent,
    ProductItemComponent,
    ProductsSearchComponent,
    WhishlistProductsComponent,
    ProductPageComponent,
    ProductListPageComponent,
    ProductDetailPageComponent,
  ],
  exports: [
    ProductsComponent,
    CategoriesBannerComponent,
    FeaturedProductsComponent,
    ProductItemComponent,
    ProductsSearchComponent,
    WhishlistProductsComponent,
    ProductPageComponent,
    ProductListPageComponent,
    ProductDetailPageComponent
  ],
  providers: [
    CategoriesService,
    ConfirmationService,
    MessageService,
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  imports: [CommonModule,
    RouterModule.forChild(routes),
    ButtonModule,
    CheckboxModule,
    RatingModule,
    InputNumberModule,
    UiModule,
    FormsModule,
  ]
})
export class ProductsModule { }
