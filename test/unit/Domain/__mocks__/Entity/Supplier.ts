import faker from 'faker'
import { mock as ContactMock } from './Contact'
import { ISupplier } from '../../../../../src/Domain/Entity/Supplier/ISupplier'
import { Supplier } from '../../../../../src/Domain/Entity/Supplier/Supplier'
const now = new Date()

export const mock: ISupplier = new Supplier({
  name: faker.name.firstName(),
  contact: ContactMock,
  createdAt: now,
  updatedAt: now,
  deletedAt: now
})
