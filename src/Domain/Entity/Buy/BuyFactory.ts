import { SupplierFactory } from '../Supplier/SupplierFactory'
import { Buy } from './Buy'
const now = new Date()

export function BuyFactory(
  id = '',
  invoice = 0,
  totalPaid = 0,
  costOfFreight = 0,
  requestDate = now,
  deliveryDate = now,
  supplier = SupplierFactory(),
  createdAt = now,
  updatedAt = now,
  deletedAt = undefined 
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
