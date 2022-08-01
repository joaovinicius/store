import faker from 'faker'
import { IProductInStock } from '../../../../../src/Domain/Entity/ProductInStock/IProductInStock'
import { ProductInStock } from '../../../../../src/Domain/Entity/ProductInStock/ProductInStock'
const now = new Date()

export const mock: IProductInStock = new ProductInStock({
  id: faker.datatype.uuid(),

  barcode: string,
  product: IProduct,
  attributeValues: IAttributeValue[],
  salePrice: number,
  purchasePrice: number,
  quantity: number,
  buy?: IBuy,

  createdAt: now,
  updatedAt: now,
  deletedAt: now
})
