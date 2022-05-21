import faker from 'faker'
import { IBilling } from '../../../../../src/Domain/Entity/Billing/IBilling'
import { Billing } from '../../../../../src/Domain/Entity/Billing/Billing'

export const mock: IBilling = new Billing({
  id: faker.datatype.uuid(),
  name: faker.name.firstName(),
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: new Date()
})
