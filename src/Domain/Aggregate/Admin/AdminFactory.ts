import { UserFactory } from '../../Aggregate/User/UserFactory'
import { Admin } from './Admin'
const now = new Date()

export function AdminFactory(
  id = '',
  user= UserFactory(),
  modulePermissions = [],
  createdAt = now,
  updatedAt = now,
  tenants = [],
  deletedAt= undefined
): Admin {
  return new Admin({
    id,
    user,
    modulePermissions,
    createdAt,
    updatedAt,
    tenants,
    deletedAt
  })
}
