import { CouponFactory } from '../../Entity/Coupon/CouponFactory'
import { PaymentFactory } from '../../Entity/Payment/PaymentFactory'
import { ShippingFactory } from '../../Entity/Shipping/ShippingFactory'
import { Cart } from './Cart'
const now = new Date()

export function CartFactory(
  id = undefined,
  products = [],
  coupon = CouponFactory(),
  shipping = ShippingFactory(),
  payment = PaymentFactory(),
  createdAt = now,
  updatedAt = now,
  deletedAt= undefined
): Cart {
  return new Cart({
    id,
    products,
    coupon,
    shipping,
    payment,
    createdAt,
    updatedAt,
    deletedAt
  })
}
