import { IAddress } from '../Address/IAddress'
import { Contact } from './Contact'
const now = new Date()

export function ContactFactory(
  id = '',
  email = '',
  phone = '',
  addresses: IAddress[] = [],
  createdAt: Date = now,
  updatedAt: Date = now
): Contact {
  return new Contact({
    id,
    email,
    phone,
    addresses,
    createdAt,
    updatedAt
  })
}
