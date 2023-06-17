import { CartItem } from 'libs/orders/src/lib/models/cart';
import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CartItemDetailed } from '../../models/cart';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'lib-orders-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cartItemsDetailed: CartItemDetailed[] = [];
  cartCount = 0;
  endSubs$ = new Subject<void>();

  constructor(
    private router: Router,
    private cartService: CartService,
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {
    this._getCartDetails();
  }

  ngOnDestroy() {
    this.endSubs$.next();
    this.endSubs$.complete();
  }

  private _getCartDetails() {
    this.cartService.cart$.pipe(takeUntil(this.endSubs$)).subscribe((respCart) => {
      this.cartItemsDetailed = [];
      this.cartCount = respCart?.items?.length ?? 0;
      respCart.items?.forEach((cartItem) => {
        console.log('cartitem from cart page', cartItem)
        console.log('cartitem from cart page', cartItem.productId)
        this.ordersService.getProduct(cartItem.productId).subscribe((respProduct: any) => {
          this.cartItemsDetailed.push({
            product: respProduct,
            quantity: cartItem.quantity
          });
        });

      });
    });
  }

  backToShop() {
    this.router.navigate(['/products']);
  }

  deleteCartItem(cartItem: CartItemDetailed) {
    this.cartService.deleteCartItem(cartItem.product.id);
  }

  updateCartItemQuantity(event: { value: any; }, cartItem: CartItemDetailed) {
    this.cartService.setCartItem(
      {
        productId: cartItem.product.id,
        quantity: event.value
      },
      true
    );
  }
}
