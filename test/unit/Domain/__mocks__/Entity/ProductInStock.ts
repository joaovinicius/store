import faker from 'faker'
import { IProductInStock } from '../../../../../src/Domain/Entity/ProductInStock/IProductInStock'
import { ProductInStock } from '../../../../../src/Domain/Entity/ProductInStock/ProductInStock'
import {mock as ProductMock} from './Product'
import {mock as BuyMock} from './Buy'
const now = new Date()
const price = faker.datatype.number(100)
export const mock: IProductInStock = new ProductInStock({
  id: faker.datatype.uuid(),

  barcode: faker.datatype.string(),
  product: ProductMock,
  attributeValues: [],
  salePrice: price,
  purchasePrice: price,
  quantity: 1,
  buy: BuyMock,

  createdAt: now,
  updatedAt: now,
  deletedAt: now
})
