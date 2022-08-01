import faker from 'faker'
import { IModulePermission } from '../../../../../src/Domain/Authentication/ModulePermission/IModulePermission'
import { ModulePermission } from '../../../../../src/Domain/Authentication/ModulePermission/ModulePermission'
import { mock as PermissionMock } from './Permission'

export const mock: IModulePermission = new ModulePermission({
  name: faker.name.firstName(),
  permissions: [PermissionMock]
})
