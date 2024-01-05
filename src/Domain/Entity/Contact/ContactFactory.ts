import { IAddress } from '../Address/IAddress'
import { Contact } from './Contact'
const now = new Date()

export function ContactFactory(
  id = '',
  email = '',
  phone = '',
  addresses: IAddress[] = [],
  createdAt: Date = now,
  updatedAt: Date = now,
  deletedAt: Date | undefined = undefined 
): Contact {
  return new Contact({
    id,
    email,
    phone,
    addresses,
    createdAt,
    updatedAt,
    deletedAt
  })
}
