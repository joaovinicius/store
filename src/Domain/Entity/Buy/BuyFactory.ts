import { ISupplier } from '../Supplier/ISupplier'
import { SupplierFactory } from '../Supplier/SupplierFactory'
import { Buy } from './Buy'

export function BuyFactory (
  id = '',
  invoice = 0,
  totalPaid = 0,
  costOfFreight = 0,
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
