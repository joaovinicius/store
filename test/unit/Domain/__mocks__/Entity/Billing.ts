import faker from 'faker'
import { IBilling } from '../../../../../src/Domain/Entity/Billing/IBilling'
import { Billing } from '../../../../../src/Domain/Entity/Billing/Billing'
const now = new Date()

export const mock: IBilling = new Billing({
  name: faker.name.firstName(),
  createdAt: now,
  updatedAt: now
})
