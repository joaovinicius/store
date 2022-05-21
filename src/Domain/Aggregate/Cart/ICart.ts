import { ICoupon } from '../../Entity/Coupon/ICoupon'
import { IPayment } from '../../Entity/Payment/IPayment'
import { IProductInCart } from '../../Entity/ProductInCart/IProductInCart'
import { IShipping } from '../../Entity/Shipping/IShipping'
import { ITimestampsAndSoftDeletes } from '../../Base'

export interface ICart extends ITimestampsAndSoftDeletes {
  id: string,
  products: IProductInCart[],
  coupon?: ICoupon,
  shipping: IShipping,
  payment: IPayment
}
