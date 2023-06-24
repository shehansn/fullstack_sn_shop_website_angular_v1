import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-orders-thank-you-page',
  templateUrl: './thank-you-page.component.html',
  styleUrls: ['./thank-you-page.component.css']
})
export class ThankYouPageComponent implements OnInit {

  constructor(
    private ordersService: OrdersService,
    private cartService: CartService,
    private router: Router,) { }

  ngOnInit(): void {

    const orderData = this.ordersService.getCashOrderData();
    console.log('orderData from thank you page', orderData);

    this.ordersService.createOrder(orderData).subscribe(

      () => {
        //redirect to thank you page // payment
        console.log('successfully added order', orderData);
        this.cartService.emptyCart();
        this.ordersService.removeCashOrderData();
        //this.router.navigate(['/success']);
      },
      () => {
        //display some message to user
      }
    );

  }


}
