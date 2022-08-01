import { IModulePermission } from '../../Authentication/ModulePermission/IModulePermission'
import { UserFactory } from '../../Aggregate/User/UserFactory'
import { IUser } from '../../Aggregate/User/IUser'
import { Admin } from './Admin'
const now = new Date()

export function AdminFactory(
  id = '',
  user: IUser = UserFactory(),
  modulePermissions: IModulePermission[] = []
): Admin {
  return new Admin({
    id,
    user,
    modulePermissions,
    createdAt: now,
    updatedAt: now
  })
}
