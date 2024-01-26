import { BuyFactory } from '../Buy'
import { ProductFactory } from '../Product/ProductFactory'
import { ProductInStock } from './ProductInStock'
const now = new Date()

export function ProductInStockFactory(
  id = undefined,
  barcode = '',
  product = ProductFactory(),
  attributeValues = [],
  salePrice = 0,
  purchasePrice = 0,
  quantity = 0,
  buy = BuyFactory(),
  createdAt = now,
  updatedAt = now,
  deletedAt = undefined 
): ProductInStock {
  return new ProductInStock({
    id,
    barcode,
    product,
    attributeValues,
    salePrice,
    purchasePrice,
    quantity,
    buy,
    createdAt,
    updatedAt,
    deletedAt
  })
}
