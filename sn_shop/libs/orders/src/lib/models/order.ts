import { OrderItem } from './order-item';
import { User } from '../../../../users/src/lib/models/user'

export class Order {
  id?: string;
  // orderItems?: OrderItem[] = [];
  orderItems?: OrderItem;
  shippingAddress1?: string;
  shippingAddress2?: string;
  city?: string;
  zip?: string;
  country?: string;
  phone?: string;
  status?: number;
  totalPrice?: string;
  // user?: User; //when get request it return as object
  user?: any;
  dateOrdered?: string;
}
