import { IBilling } from '../../Entity/Billing/IBilling'
import { ICart } from '../Cart/ICart'

export interface IPurchase extends ICart {
  billing: IBilling,
  createdAt: Date,
  updatedAt: Date,
  deletedAt?: Date
}
