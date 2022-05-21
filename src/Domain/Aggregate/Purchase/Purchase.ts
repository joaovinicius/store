import { Cart } from '../Cart/Cart'
import { IBilling } from '../../Entity/Billing/IBilling'
import { IPurchase } from './IPurchase'

export class Purchase extends Cart implements IPurchase {
  public billing: IBilling

  constructor (props: IPurchase) {
    super(props)
    this.billing = props.billing
  }
}
