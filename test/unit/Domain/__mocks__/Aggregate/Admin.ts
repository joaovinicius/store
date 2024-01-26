import faker from 'faker'
import { mock as UserMock } from './User'
import { IAdmin } from '../../../../../src/Domain/Aggregate/Admin/IAdmin'
import { Admin } from '../../../../../src/Domain/Aggregate/Admin/Admin'
import { mock as ModulePermissionMock } from '../Authentication/ModulePermission'

const now = new Date()

export const mock: IAdmin = new Admin({
  
  user: UserMock,
  modulePermissions: [ModulePermissionMock],
  createdAt: now,
  updatedAt: now,
  tenants: []
})
