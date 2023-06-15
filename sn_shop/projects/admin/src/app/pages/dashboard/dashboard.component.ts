import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrdersService } from 'libs/orders/src/lib/services/orders.service';
import { ProductsService } from 'libs/products/src/lib/services/products.service';
import { UsersService } from 'libs/users/src/lib/services/users.service';
import { Subject, combineLatest, takeUntil } from 'rxjs';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  statistics: any;
  //endsubs$: Subject<any> = new Subject();
  endSubs$ = new Subject<void>();

  constructor(
    private userService: UsersService,
    private productService: ProductsService,
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {
    combineLatest([
      this.ordersService.getOrdersCount(),
      this.productService.getProductsCount(),
      this.userService.getUsersCount(),
      this.ordersService.getTotalSales()
    ])
      .pipe(takeUntil(this.endSubs$))
      .subscribe((values) => {
        this.statistics = values;
      });
  }

  ngOnDestroy() {
    this.endSubs$.next();
    this.endSubs$.complete();
  }
}
