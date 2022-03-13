import faker from 'faker'
import { IPermission } from './IPermission'
import { Permission } from './Permission'

export const PermissionMock: IPermission = new Permission({
  name: faker.name.firstName(),
  value: faker.datatype.boolean()
})
