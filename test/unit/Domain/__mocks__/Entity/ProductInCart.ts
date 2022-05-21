import faker from 'faker'
import { IProductInCart } from '../../../../../src/Domain/Entity/ProductInCart/IProductInCart'
import { ProductInCart } from '../../../../../src/Domain/Entity/ProductInCart/ProductInCart'

export const mock: IProductInCart = new ProductInCart({
  id: faker.datatype.uuid(),
  name: faker.name.firstName(),
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: new Date()
})
