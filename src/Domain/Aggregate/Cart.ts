import { Coupon } from "../Entity/Coupon";
import { Payment } from "../Entity/Payment";
import { ProductInCart } from "../Entity/ProductInCart";
import { Shipping } from "../Entity/Shipping";

export interface Cart {
  id: string,
  products: ProductInCart[],
  coupon?: Coupon,
  shipping: Shipping,
  payment: Payment,
}
