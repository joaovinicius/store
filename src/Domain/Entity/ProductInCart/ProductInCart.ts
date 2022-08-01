import { IProductInStock } from '../ProductInStock'
import { IProductInCart } from './IProductInCart'

export class ProductInCart implements IProductInCart {
  public id: string
  public quantity: number
  public product: IProductInStock
  public note: string
  public createdAt: Date
  public updatedAt: Date
  public deletedAt?: Date

  constructor(props: IProductInCart) {
    this.id = props.id
    this.quantity = props.quantity
    this.product = props.product
    this.note = props.note
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
    this.deletedAt = props.deletedAt
  }
}
