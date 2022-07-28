import { ISupplier } from '../Supplier'

export interface IBuy {
  id?: string,
  invoice?: number,
  totalPaid: number,
  costOfFreight: number,
  requestDate: Date,
  deliveryDate: Date,
  supplier: ISupplier,
  createdAt: Date,
  updatedAt: Date,
  deletedAt?: Date
}
