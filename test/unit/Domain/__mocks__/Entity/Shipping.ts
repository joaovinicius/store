import faker from 'faker'
import { IShipping } from '../../../../../src/Domain/Entity/Shipping/IShipping'
import { Shipping } from '../../../../../src/Domain/Entity/Shipping/Shipping'
const now = new Date()

export const mock: IShipping = new Shipping({
  id: faker.datatype.uuid(),
  name: faker.name.firstName(),
  createdAt: now,
  updatedAt: now,
  deletedAt: now
})
