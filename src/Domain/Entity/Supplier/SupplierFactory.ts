import { IContact } from '../Contact/IContact'
import { ContactFactory } from '../Contact/ContactFactory'
import { Supplier } from './Supplier'

export function SupplierFactory (
  id: string = '',
  name: string = '',
  contact: IContact = ContactFactory(),
  createdAt: Date = new Date(),
  updatedAt: Date = new Date(),
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
