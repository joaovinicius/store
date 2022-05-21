import { ITimestampsAndSoftDeletes } from '../../Base'
import { ISupplier } from '../Supplier'

export interface IBuy extends ITimestampsAndSoftDeletes {
  id?: string,
  invoice?: number,
  totalPaid: number,
  costOfFreight: number,
  requestDate: Date,
  deliveryDate: Date,
  supplier: ISupplier,
}
