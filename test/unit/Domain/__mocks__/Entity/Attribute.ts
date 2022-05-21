import faker from 'faker'
import { IAttribute } from '../../../../../src/Domain/Entity/Attribute/IAttribute'
import { Attribute } from '../../../../../src/Domain/Entity/Attribute/Attribute'

export const mock: IAttribute = new Attribute({
  id: faker.datatype.uuid(),
  name: faker.name.firstName(),
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: new Date()
})
