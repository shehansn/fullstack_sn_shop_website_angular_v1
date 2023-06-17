import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'libs/users/src/lib/services/users.service';
import { CartService } from '../../services/cart.service';
import { OrdersService } from '../../services/orders.service';
import { OrderItem } from '../../models/order-item';
import { Subject, takeUntil } from 'rxjs';
import { Cart } from '../../models/cart';
import { Order } from '../../models/order';
import { ORDER_STATUS } from '../../order.constants';

@Component({
  selector: 'lib-orders-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit, OnDestroy {

  checkoutFormGroup!: FormGroup;
  isSubmitted = false;
  //orderItems: OrderItem[] = [];
  orderItems: any;
  //userId: any;
  userId = '6489e4b55ba66f03243f1df7'
  countries: any;
  unsubscribe$ = new Subject<void>();

  constructor(
    private router: Router,
    private usersService: UsersService,
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {
    this._initCheckoutForm();
    this._autoFillUserData();
    this._getCartItems();
    this._getCountries();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private _initCheckoutForm() {
    this.checkoutFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      zip: ['', Validators.required],
      apartment: ['', Validators.required],
      street: ['', Validators.required]
    });
  }

  private _autoFillUserData() {
    this.usersService
      .observeCurrentUser()
    // .pipe(takeUntil())
    // .subscribe((user: { id: string; name: any; email: any; phone: any; city: any; street: any; country: any; zip: any; apartment: any; }) => {
    //   if (user) {
    //     this.userId = user.id;
    //     this.checkoutForm['name'].setValue(user.name);
    //     this.checkoutForm['email'].setValue(user.email);
    //     this.checkoutForm['phone'].setValue(user.phone);
    //     this.checkoutForm['city'].setValue(user.city);
    //     this.checkoutForm['street'].setValue(user.street);
    //     this.checkoutForm['country'].setValue(user.country);
    //     this.checkoutForm['zip'].setValue(user.zip);
    //     this.checkoutForm['apartment'].setValue(user.apartment);
    //   }
    // });
  }

  private _getCartItems() {
    const cart: Cart = this.cartService.getCart();
    console.log('cart from checkout', cart);
    this.orderItems = cart.items?.map((item: any) => {
      return {
        product: item.productId,
        quantity: item.quantity
      };
    });
    console.log(' orderItems from checkout', this.orderItems);
  }

  private _getCountries() {
    this.countries = this.usersService.getCountries();
  }

  backToCart() {
    this.router.navigate(['/cart']);
  }

  placeOrder() {
    this.isSubmitted = true;
    if (this.checkoutFormGroup.invalid) {
      return;
    }

    const order: Order = {
      orderItems: this.orderItems,
      shippingAddress1: this.checkoutForm['street'].value,
      shippingAddress2: this.checkoutForm['apartment'].value,
      city: this.checkoutForm['city'].value,
      zip: this.checkoutForm['zip'].value,
      country: this.checkoutForm['country'].value,
      phone: this.checkoutForm['phone'].value,
      status: 0,
      user: this.userId,
      dateOrdered: `${Date.now()}`
    };
    console.log('order', order)
    this.ordersService.createOrder(order).subscribe(

      () => {
        //redirect to thank you page // payment
        console.log('successfully added order', order);
        this.cartService.emptyCart();
        this.router.navigate(['/success']);
      },
      () => {
        //display some message to user
      }
    );
  }

  get checkoutForm() {
    return this.checkoutFormGroup.controls;
  }
}
