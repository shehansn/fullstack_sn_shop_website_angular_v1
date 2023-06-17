import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'lib-orders-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css']
})
export class CartIconComponent {
  cartCount: any;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart$.subscribe((cart) => {
      this.cartCount = cart?.items?.length ?? 0;
    });
  }
}
