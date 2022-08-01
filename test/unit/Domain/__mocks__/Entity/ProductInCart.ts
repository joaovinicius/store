import faker from 'faker'
import { IProductInCart } from '../../../../../src/Domain/Entity/ProductInCart/IProductInCart'
import { ProductInCart } from '../../../../../src/Domain/Entity/ProductInCart/ProductInCart'
import { mock as ProductInStockMock } from './ProductInStock'
const now = new Date()

export const mock: IProductInCart = new ProductInCart({
  id: faker.datatype.uuid(),
  quantity: faker.datatype.number(10),
  product: ProductInStockMock,
  note: faker.lorem.sentence(),
  createdAt: now,
  updatedAt: now
})
