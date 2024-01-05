import { IModulePermission } from '../../Authentication/ModulePermission/IModulePermission'
import { UserFactory } from '../../Aggregate/User/UserFactory'
import { IUser } from '../../Aggregate/User/IUser'
import { Admin } from './Admin'
import { TenantFactory } from 'src/Domain/Authentication/Tenant'
const now = new Date()

export function AdminFactory(
  id = '',
  user: IUser = UserFactory(),
  modulePermissions: IModulePermission[] = [],
  createdAt: Date = now,
  updatedAt: Date = now,
  tenants = [TenantFactory()]
): Admin {
  return new Admin({
    id,
    user,
    modulePermissions,
    createdAt,
    updatedAt,
    tenants
  })
}
