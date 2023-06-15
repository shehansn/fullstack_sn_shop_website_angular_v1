import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Order } from 'libs/orders/src/lib/models/order';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ORDER_STATUS } from '../order.constants';
import { OrdersService } from 'libs/orders/src/lib/services/orders.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'admin-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.css']
})
export class OrdersDetailsComponent implements OnInit, OnDestroy {

  order!: Order;
  orderStatuses: any;
  selectedStatus: any;
  //endsubs$: Subject<any> = new Subject();
  endSubs$ = new Subject<void>();

  constructor(
    private messageService: MessageService,
    private location: Location,
    private orderService: OrdersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._getOrder();
    this._mapOrderStatus();

  }
  ngOnDestroy(): void {

    this.endSubs$.next();
    this.endSubs$.complete();
  }
  onCancle() {
    this.location.back();
  }

  private _mapOrderStatus() {
    this.orderStatuses = Object.keys(ORDER_STATUS).map((key) => {
      return {
        id: key,
        name: ORDER_STATUS[key].label
      };
    });
  }

  private _getOrder() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.orderService
          .getOrder(params['id'])
          .pipe(takeUntil(this.endSubs$))
          .subscribe((order) => {
            this.order = order;
            this.selectedStatus = order.status;
          });
      }
    });
  }

  onStatusChange(event: { value: any; }) {
    this.orderService
      .updateOrder({ status: event.value }, this.order.id)
      .pipe(takeUntil(this.endSubs$))
      .subscribe(
        () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Order is updated!'
          });
        },
        () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Order is not updated!'
          });
        }
      );
  }

}
