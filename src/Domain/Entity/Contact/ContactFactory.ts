import { Contact } from './Contact'
const now = new Date()

export function ContactFactory(
  id = '',
  email = '',
  phone = '',
  addresses = [],
  createdAt = now,
  updatedAt = now,
  deletedAt = undefined 
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
