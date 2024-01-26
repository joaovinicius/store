import { ContactFactory } from '../Contact/ContactFactory'
import { Supplier } from './Supplier'
const now = new Date()

export function SupplierFactory(
  id = undefined,
  name = '',
  contact = ContactFactory(),
  createdAt = now,
  updatedAt = now, 
  deletedAt = undefined 
): Supplier {
  return new Supplier({
    id,
    name,
    contact,
    createdAt,
    updatedAt, 
    deletedAt
  })
}
