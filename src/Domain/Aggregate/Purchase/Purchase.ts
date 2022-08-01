import { IBilling } from '../../Entity/Billing/IBilling'
import { IPurchase } from './IPurchase'
import { ICart } from '../Cart/ICart'

export class Purchase  implements IPurchase {
  public id: string
  public cart: ICart
  public billing: IBilling
  public createdAt: Date
  public updatedAt: Date
  public deletedAt?: Date

  constructor (props: IPurchase) {
    this.id = props.id
    this.cart = props.cart
    this.billing = props.billing
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
    this.deletedAt = props.deletedAt
  }
}
