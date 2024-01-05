import { ISupplier } from '../Supplier/ISupplier'
import { SupplierFactory } from '../Supplier/SupplierFactory'
import { Buy } from './Buy'
const now = new Date()

export function BuyFactory(
  id = '',
  invoice = 0,
  totalPaid = 0,
  costOfFreight = 0,
  requestDate: Date = now,
  deliveryDate: Date = now,
  supplier: ISupplier = SupplierFactory(),
  createdAt: Date = now,
  updatedAt: Date = now,
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
