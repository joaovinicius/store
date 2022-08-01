import { ISupplier } from '../Supplier/ISupplier'
import { IBuy } from './IBuy'

export class Buy implements IBuy {
  public id?: string
  public invoice?: number
  public totalPaid: number
  public costOfFreight: number
  public requestDate: Date
  public deliveryDate: Date
  public supplier: ISupplier
  public createdAt: Date
  public updatedAt: Date
  public deletedAt?: Date

  constructor(props: IBuy) {
    this.id = props.id
    this.invoice = props.invoice
    this.totalPaid = props.totalPaid
    this.costOfFreight = props.costOfFreight
    this.requestDate = props.requestDate
    this.deliveryDate = props.deliveryDate
    this.supplier = props.supplier
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
    this.deletedAt = props.deletedAt
  }
}
