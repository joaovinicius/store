import faker from 'faker'
import { IAttribute } from '../../../../../src/Domain/Entity/Attribute/IAttribute'
import { Attribute } from '../../../../../src/Domain/Entity/Attribute/Attribute'
const now = new Date()

export const mock: IAttribute = new Attribute({
  id: faker.datatype.uuid(),
  name: faker.name.firstName(),
  createdAt: now,
  updatedAt: now
})
