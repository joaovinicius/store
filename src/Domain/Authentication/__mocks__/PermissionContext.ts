import faker from 'faker'
import { IPermissionContext } from './IPermissionContext'
import { PermissionContext } from './PermissionContext'

export const PermissionContextMock: IPermissionContext = new PermissionContext({
  name: faker.name.firstName(),
  permissions: []
})
