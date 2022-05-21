import { TimestampsAndSoftDeletes } from '../../Base'
import { IProductInStock } from '../ProductInStock'
import { IProductInCart } from './IProductInCart'

export class ProductInCart extends TimestampsAndSoftDeletes implements IProductInCart {
  public id: string
  public quantity: number
  public product: IProductInStock
  public note: string

  constructor (props: IProductInCart) {
    super(props)
    this.id = props.id
    this.quantity = props.quantity
    this.product = props.product
    this.note = props.note
  }
}
