import { NgModule } from '@angular/core';
import { OrdersComponent } from './orders.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { ThankYouPageComponent } from './pages/thank-you-page/thank-you-page.component';
import { CartService } from '../lib/services/cart.service';

import { BadgeModule } from 'primeng/badge';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { AuthGuardService } from 'libs/users/src/lib/services/auth-guard.service';

const routes: Routes = [
  {
    path: 'cart',
    component: CartPageComponent
  },
  {
    path: 'checkout',
    canActivate: [AuthGuardService],
    component: CheckoutPageComponent
  },
  {
    path: 'success',
    component: ThankYouPageComponent
  }
];
@NgModule({
  declarations: [
    OrdersComponent,
    CartIconComponent,
    OrderSummaryComponent,
    CartPageComponent,
    CheckoutPageComponent,
    ThankYouPageComponent
  ],

  imports: [CommonModule,
    RouterModule.forChild(routes),
    BadgeModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputMaskModule,
    DropdownModule,
    ButtonModule,
  ],
  exports: [
    OrdersComponent,
    CartIconComponent,
    OrderSummaryComponent,
    CartPageComponent,
    CheckoutPageComponent,
    ThankYouPageComponent
  ]
})
export class OrdersModule {
  constructor(cartService: CartService) {
    cartService.initCartLocalStorage(); //initialize car will call only one time //only when refreshing or first time navigating
  }
}
