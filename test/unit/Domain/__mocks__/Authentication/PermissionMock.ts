import faker from 'faker'
import { IPermission } from '../../../../../src/Domain/Authentication/Permission/IPermission'
import { Permission } from '../../../../../src/Domain/Authentication/Permission/Permission'

export const mock: IPermission = new Permission({
  name: faker.name.firstName(),
  value: faker.datatype.boolean()
})
