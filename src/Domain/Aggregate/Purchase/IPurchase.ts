import { IBilling } from '../../Entity/Billing/IBilling'
import { ICart } from '../Cart/ICart'
import { ITimestampsAndSoftDeletes } from '../../Base'

export interface IPurchase extends ICart, IBase {
  billing: IBilling
}
