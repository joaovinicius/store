import faker from 'faker'
import { IContact } from '../../../../../src/Domain/Entity/Contact/IContact'
import { Contact } from '../../../../../src/Domain/Entity/Contact/Contact'

export const mock: IContact = new Contact({
  id: faker.datatype.uuid(),
  email: faker.internet.email(),
  phone: faker.internet.email(),
  addresses: [],
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: new Date()
})
