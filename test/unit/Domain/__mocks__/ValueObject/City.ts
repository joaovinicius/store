import faker from 'faker'
import { ICity } from '../../../../../src/Domain/ValueObject/City/ICity'
import { City } from '../../../../../src/Domain/ValueObject/City/City'
const now = new Date()

export const mock: ICity = new City({
  id: faker.datatype.uuid(),
  name: faker.name.firstName(),
  stateId: faker.datatype.uuid(),
  createdAt: now,
  updatedAt: now
})
