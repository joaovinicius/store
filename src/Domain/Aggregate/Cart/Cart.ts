import { TimestampsAndSoftDeletes } from '../../Base'
import { ICoupon } from '../../Entity/Coupon/ICoupon'
import { IPayment } from '../../Entity/Payment/IPayment'
import { IProductInCart } from '../../Entity/ProductInCart/IProductInCart'
import { IShipping } from '../../Entity/Shipping/IShipping'
import { ICart } from './ICart'

export class Cart extends TimestampsAndSoftDeletes implements ICart {
  public id: string
  public products: IProductInCart[]
  public coupon?: ICoupon
  public shipping: IShipping
  public payment: IPayment

  constructor (props: ICart) {
    super(props)
    this.id = props.id
    this.products = props.products
    this.coupon = props.coupon
    this.shipping = props.shipping
    this.payment = props.payment
  }
}
