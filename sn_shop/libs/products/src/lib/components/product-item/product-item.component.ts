import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from 'libs/orders/src/lib/services/cart.service';
import { CartItem } from 'libs/orders/src/lib/models/cart';
import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';

@Component({
  selector: 'lib-products-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input()
  product!: Product;
  location: any;

  constructor(private cartService: CartService, private messageService: MessageService,) { }

  ngOnInit(): void { }

  addProductToCart() {
    const cartItem: CartItem = {
      productId: this.product.id,
      quantity: 1
    };
    this.cartService.setCartItem(cartItem)
  }
}
