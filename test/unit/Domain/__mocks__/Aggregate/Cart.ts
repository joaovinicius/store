import faker from 'faker'
import { ICart } from '../../../../../src/Domain/Aggregate/Cart/ICart'
import { Cart } from '../../../../../src/Domain/Aggregate/Cart/Cart'

export const mock: ICart = new Cart({
  id: faker.random.uuid(),
  name: faker.name.firstName(),
})
