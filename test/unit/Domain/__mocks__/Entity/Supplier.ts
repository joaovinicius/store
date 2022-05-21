import faker from 'faker'
import { ContactFactory } from '../../../../../src/Domain/Entity/Contact/ContactFactory'
import { ISupplier } from '../../../../../src/Domain/Entity/Supplier/ISupplier'
import { Supplier } from '../../../../../src/Domain/Entity/Supplier/Supplier'

export const mock: ISupplier = new Supplier({
  id: faker.datatype.uuid(),
  name: faker.name.firstName(),
  contact: ContactFactory(),
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: new Date()
})
