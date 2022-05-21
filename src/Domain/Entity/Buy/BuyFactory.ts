import { ISupplier } from '../Supplier/ISupplier'
import { SupplierFactory } from '../Supplier/SupplierFactory'
import { Buy } from './Buy'

export function BuyFactory (
  id: string = '',
  invoice: number = 0,
  totalPaid: number = 0,
  costOfFreight: number = 0,
  requestDate: Date = new Date(),
  deliveryDate: Date = new Date(),
  supplier: ISupplier = SupplierFactory(),
  createdAt: Date = new Date(),
  updatedAt: Date = new Date(),
  deletedAt: Date | undefined = undefined
): Buy {
  return new Buy({
    id,
    invoice,
    totalPaid,
    costOfFreight,
    requestDate,
    deliveryDate,
    supplier,
    createdAt,
    updatedAt,
    deletedAt
  })
}
