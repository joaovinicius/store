import faker from 'faker'
import { IUser } from '../../../../../src/Domain/Aggregate/User/IUser'
import { User } from '../../../../../src/Domain/Aggregate/User/User'

export const mock: IUser = new User({
  id: faker.random.uuid(),
  name: faker.name.firstName(),
})
