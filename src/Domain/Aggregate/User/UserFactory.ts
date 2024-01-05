import { ITenant } from 'src/Domain/Authentication/Tenant'
import { ContactFactory } from '../../Entity/Contact/ContactFactory'
import { IContact } from '../../Entity/Contact/IContact'
import { User } from './User'
import { TenantFactory } from 'src/Domain/Authentication/Tenant'

const now = new Date()

export function UserFactory (
  id = '',
  name = '',
  password = '',
  contact: IContact = ContactFactory(),
  createdAt: Date = now,
  updatedAt: Date = now,
  tenants: ITenant[] = [TenantFactory()]
): User {
  return new User({
    id,
    name,
    password,
    contact,
    createdAt,
    updatedAt,
    tenants
  })
}
