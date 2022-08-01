import faker from 'faker'
import { IProduct } from '../../../../../src/Domain/Entity/Product/IProduct'
import { Product } from '../../../../../src/Domain/Entity/Product/Product'
const now = new Date()

export const mock: IProduct = new Product({
  id: faker.datatype.uuid(),
  name: faker.name.firstName(),
  createdAt: now,
  updatedAt: now,
  deletedAt: now
})
