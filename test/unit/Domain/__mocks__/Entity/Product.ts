import faker from 'faker'
import { IProduct } from '../../../../../src/Domain/Entity/Product/IProduct'
import { Product } from '../../../../../src/Domain/Entity/Product/Product'

export const mock: IProduct = new Product({
  id: faker.datatype.uuid(),
  name: faker.name.firstName(),
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: new Date()
})
