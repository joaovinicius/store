import faker from 'faker'
import { IPurchase } from '../../../../../src/Domain/Aggregate/Purchase/IPurchase'
import { Purchase } from '../../../../../src/Domain/Aggregate/Purchase/Purchase'

export const mock: IPurchase = new Purchase({
  id: faker.random.uuid(),
  name: faker.name.firstName(),
})
