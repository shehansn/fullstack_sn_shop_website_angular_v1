import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Subject, takeUntil, timer } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'libs/orders/src/lib/services/cart.service';
import { CartItem } from 'libs/orders/src/lib/models/cart';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'lib-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit, OnDestroy {
  product!: Product;
  endSubs$ = new Subject<void>();
  quantity = 1;

  constructor(
    private prodService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService, private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['productid']) {
        this._getProduct(params['productid']);
      }
    });
  }

  ngOnDestroy(): void {
    this.endSubs$.next();
    this.endSubs$.complete();
  }

  addProductToCart() {
    const cartItem: CartItem = {
      productId: this.product.id,
      quantity: this.quantity
    };

    this.cartService.setCartItem(cartItem)

  }

  private _getProduct(id: string) {
    this.prodService
      .getProduct(id)
      .pipe(takeUntil(this.endSubs$))
      .subscribe((resProduct) => {
        this.product = resProduct;
      });
  }
}
