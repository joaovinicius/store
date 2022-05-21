import faker from 'faker'
import { IShipping } from '../../../../../src/Domain/Entity/Shipping/IShipping'
import { Shipping } from '../../../../../src/Domain/Entity/Shipping/Shipping'

export const mock: IShipping = new Shipping({
  id: faker.datatype.uuid(),
  name: faker.name.firstName(),
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: new Date()
})
