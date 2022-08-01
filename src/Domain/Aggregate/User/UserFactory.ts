import { ContactFactory } from '../../Entity/Contact/ContactFactory'
import { IContact } from '../../Entity/Contact/IContact'
import { User } from './User'
const now = new Date()

export function UserFactory (
  id = '',
  name = '',
  password = '',
  contact: IContact = ContactFactory(),
  createdAt: Date = now,
  updatedAt: Date = now
): User {
  return new User({
    id,
    name,
    password,
    contact,
    createdAt,
    updatedAt
  })
}
