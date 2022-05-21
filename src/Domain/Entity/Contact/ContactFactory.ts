import { IAddress } from '../Address/IAddress'
import { Contact } from './Contact'

export function ContactFactory (
  id: string = '',
  email: string = '',
  phone: string = '',
  addresses: IAddress[] = [],
  createdAt: Date = new Date(),
  updatedAt: Date = new Date(),
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
