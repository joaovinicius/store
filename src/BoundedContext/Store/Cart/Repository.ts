import { Cart } from "../../../Domain/Aggregate/Cart";
import { Coupon } from "../../../Domain/Entity/Coupon";
import { ProductInStock } from "../../../Domain/Entity/ProductInStock";

export interface Repository {
  addProduct(product: ProductInStock): Cart,
  removeProduct(product: ProductInStock): Cart,
  applyCoupon(coupon: Coupon): Cart,
  calculateShipping(cep: string): Cart,
  selectShipping(): Cart,
  selectPayment(): Cart,
}
