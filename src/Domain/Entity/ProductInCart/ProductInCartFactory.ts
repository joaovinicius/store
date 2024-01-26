import { ProductInStockFactory } from '../ProductInStock'
import { ProductInCart } from './ProductInCart'
const now = new Date()

export function ProductInCartFactory(
  id = undefined,
  quantity = 0,
  product = ProductInStockFactory(),
  note = '',
  createdAt = now,
  updatedAt = now,
  deletedAt = undefined 
): ProductInCart {
  return new ProductInCart({
    id,
    quantity,
    product,
    note,
    createdAt,
    updatedAt,
    deletedAt
  })
}
