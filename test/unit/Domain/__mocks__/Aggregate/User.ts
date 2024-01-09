import faker from 'faker'
import { IUser } from '../../../../../src/Domain/Aggregate/User/IUser'
import { User } from '../../../../../src/Domain/Aggregate/User/User'
import { mock as ContactMock } from '../Entity/Contact'
const now = new Date()

export const mock: IUser = new User({
  id: faker.random.uuid(),
  name: faker.name.firstName(),
  password: faker.internet.password(),
  contact: ContactMock,
  createdAt: now,
  updatedAt: now,
  tenants: []
})
