import faker from 'faker'
import { IState } from '../../../../../src/Domain/ValueObject/State/IState'
import { State } from '../../../../../src/Domain/ValueObject/State/State'
const now = new Date()

export const mock: IState = new State({
  id: faker.datatype.uuid(),
  name: faker.name.firstName(),
  abbr: faker.name.firstName().slice(0, 2),
  createdAt: now,
  updatedAt: now
})
