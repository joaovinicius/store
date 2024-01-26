import faker from 'faker'
import { IPayment } from '../../../../../src/Domain/Entity/Payment/IPayment'
import { Payment } from '../../../../../src/Domain/Entity/Payment/Payment'
const now = new Date()

export const mock: IPayment = new Payment({
  name: faker.name.firstName(),
  createdAt: now,
  updatedAt: now,
  deletedAt: now
})
