import { ICoupon } from '../../Entity/Coupon/ICoupon'
import { IPayment } from '../../Entity/Payment/IPayment'
import { IProductInCart } from '../../Entity/ProductInCart/IProductInCart'
import { IShipping } from '../../Entity/Shipping/IShipping'

export interface ICart {
  id: string,
  products: IProductInCart[],
  coupon?: ICoupon,
  shipping: IShipping,
  payment: IPayment,
  createdAt: Date,
  updatedAt: Date,
  deletedAt?: Date
}
