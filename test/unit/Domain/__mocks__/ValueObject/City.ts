import faker from 'faker'
import { ICity } from '../../../../../src/Domain/ValueObject/City/ICity'
import { City } from '../../../../../src/Domain/ValueObject/City/City'
import { mock as StateMock } from './State'
const now = new Date()

export const mock: ICity = new City({
  name: faker.name.firstName(),
  state: StateMock,
  createdAt: now,
  updatedAt: now
})
