import faker from 'faker'
import { IPayment } from '../../../../../src/Domain/Entity/Payment/IPayment'
import { Payment } from '../../../../../src/Domain/Entity/Payment/Payment'

export const mock: IPayment = new Payment({
  id: faker.datatype.uuid(),
  name: faker.name.firstName(),
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: new Date()
})
