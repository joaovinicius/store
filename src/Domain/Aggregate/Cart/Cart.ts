import { ICoupon } from '../../Entity/Coupon/ICoupon'
import { IPayment } from '../../Entity/Payment/IPayment'
import { IProductInCart } from '../../Entity/ProductInCart/IProductInCart'
import { IShipping } from '../../Entity/Shipping/IShipping'
import { ICart } from './ICart'

export class Cart implements ICart {
  public id: string
  public products: IProductInCart[]
  public coupon?: ICoupon
  public shipping: IShipping
  public payment: IPayment
  public createdAt: Date
  public updatedAt: Date
  public deletedAt?: Date

  constructor (props: ICart) {
    this.id = props.id
    this.products = props.products
    this.coupon = props.coupon
    this.shipping = props.shipping
    this.payment = props.payment
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
    this.deletedAt = props.deletedAt
  }



}
