import faker from 'faker'
import { IProductInStock } from '../../../../../src/Domain/Entity/ProductInStock/IProductInStock'
import { ProductInStock } from '../../../../../src/Domain/Entity/ProductInStock/ProductInStock'

export const mock: IProductInStock = new ProductInStock({
  id: faker.datatype.uuid(),
  name: faker.name.firstName(),
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: new Date()
})
