import faker from 'faker'
import { IProduct } from '../../../../../src/Domain/Entity/Product/IProduct'
import { Product } from '../../../../../src/Domain/Entity/Product/Product'
const now = new Date()

export const mock: IProduct = new Product({
  name: faker.name.firstName(),
  createdAt: now,
  updatedAt: now,
  deletedAt: now,
  description: faker.lorem.paragraph(),
  brand: faker.name.firstName(),
  model: faker.name.firstName(),
})
