import { ICoupon } from '../../Entity/Coupon/ICoupon'
import { CouponFactory } from '../../Entity/Coupon/CouponFactory'
import { IPayment } from '../../Entity/Payment/IPayment'
import { PaymentFactory } from '../../Entity/Payment/PaymentFactory'
import { IProductInCart } from '../../Entity/ProductInCart/IProductInCart'
import { IShipping } from '../../Entity/Shipping/IShipping'
import { ShippingFactory } from '../../Entity/Shipping/ShippingFactory'
import { IBilling } from '../../Entity/Billing/IBilling'
import { BillingFactory } from '../../Entity/Billing/BillingFactory'
import { Purchase } from './Purchase'

export function PurchaseFactory (
  id = '',
  products: IProductInCart[] = [],
  coupon: ICoupon = CouponFactory(),
  shipping: IShipping = ShippingFactory(),
  payment: IPayment = PaymentFactory(),
  billing: IBilling = BillingFactory(),
  createdAt: Date = new Date(),
  updatedAt: Date = new Date(),
  deletedAt: Date | undefined = undefined
): Purchase {
  return new Purchase({
    id,
    products,
    coupon,
    shipping,
    payment,
    billing,
    createdAt,
    updatedAt,
    deletedAt
  })
}
