import { ContactFactory } from '../../Entity/Contact/ContactFactory'
import { User } from './User'
import { TenantFactory } from 'src/Domain/Authentication/Tenant'

const now = new Date()

export function UserFactory (
  id = '',
  name = '',
  password = '',
  contact = ContactFactory(),
  createdAt = now,
  updatedAt = now,
  tenants = [TenantFactory()]
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
