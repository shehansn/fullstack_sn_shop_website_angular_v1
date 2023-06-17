import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { AccordionModule } from 'primeng/accordion';
import { MessagesComponent } from './shared/messages/messages.component';
import { NavigationComponent } from './shared/navigation/navigation.component';

import { UiModule } from 'libs/ui/src/lib/ui.module';
import { OrdersModule } from 'libs/orders/src/lib/orders.module';
import { UsersModule } from 'libs/users/src/lib/users.module';
import { ProductsModule } from 'libs/products/src/lib/products.module';
import { CategoriesService } from '../../../../libs/products/src/lib/services/categories.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductListComponent,
    HeaderComponent,
    FooterComponent,
    MessagesComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule, BrowserAnimationsModule,
    UiModule, OrdersModule, UsersModule, ProductsModule,
    HttpClientModule

  ],
  providers: [CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
