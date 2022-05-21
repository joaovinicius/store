import { ICoupon } from '../../Entity/Coupon/ICoupon'
import { CouponFactory } from '../../Entity/Coupon/CouponFactory'
import { IPayment } from '../../Entity/Payment/IPayment'
import { PaymentFactory } from '../../Entity/Payment/PaymentFactory'
import { IProductInCart } from '../../Entity/ProductInCart/IProductInCart'
import { IShipping } from '../../Entity/Shipping/IShipping'
import { ShippingFactory } from '../../Entity/Shipping/ShippingFactory'
import { Cart } from './Cart'

export function CartFactory (
  id: string = '',
  products: IProductInCart[] = [],
  coupon: ICoupon = CouponFactory(),
  shipping: IShipping = ShippingFactory(),
  payment: IPayment = PaymentFactory(),
  createdAt: Date = new Date(),
  updatedAt: Date = new Date(),
  deletedAt: Date | undefined = undefined
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
