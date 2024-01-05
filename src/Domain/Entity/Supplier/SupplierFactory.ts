import { IContact } from '../Contact/IContact'
import { ContactFactory } from '../Contact/ContactFactory'
import { Supplier } from './Supplier'
const now = new Date()

export function SupplierFactory(
  id = '',
  name = '',
  contact: IContact = ContactFactory(),
  createdAt: Date = now,
  updatedAt: Date = now, 
  deletedAt: Date | undefined = undefined 
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
