import { Timestamps,  SoftDeletes } from '../../Base'
import { ISupplier } from '../Supplier/ISupplier'
import { IBuy } from './IBuy'

export class Buy extends TimestampsAndSoftDeletes implements IBuy {
  public id?: string
  public invoice?: number
  public totalPaid: number
  public costOfFreight: number
  public requestDate: Date
  public deliveryDate: Date
  public supplier: ISupplier

  constructor (props: IBuy) {
    super(props)
    this.id = props.id
    this.invoice = props.invoice
    this.totalPaid = props.totalPaid
    this.costOfFreight = props.costOfFreight
    this.requestDate = props.requestDate
    this.deliveryDate = props.deliveryDate
    this.supplier = props.supplier
  }
}
