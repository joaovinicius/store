import { ContactFactory } from '../../Entity/Contact/ContactFactory'
import { IContact } from '../../Entity/Contact/IContact'
import { User } from './User'

export function UserFactory (
  id: string = '',
  name: string = '',
  password: string = '',
  contact: IContact = ContactFactory(),
  createdAt: Date = new Date(),
  updatedAt: Date = new Date(),
  deletedAt: Date | undefined = undefined
): User {
  return new User({
    id,
    name,
    password,
    contact,
    createdAt,
    updatedAt,
    deletedAt
  })
}
