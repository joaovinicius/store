import faker from 'faker'
import { IContact } from '../../../../../src/Domain/Entity/Contact/IContact'
import { Contact } from '../../../../../src/Domain/Entity/Contact/Contact'
const now = new Date()

export const mock: IContact = new Contact({
  email: faker.internet.email(),
  phone: faker.internet.email(),
  addresses: [],
  createdAt: now,
  updatedAt: now
})
