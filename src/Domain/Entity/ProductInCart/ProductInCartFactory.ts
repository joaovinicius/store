import { IProductInStock, ProductInStockFactory } from '../ProductInStock'
import { ProductInCart } from './ProductInCart'
const now = new Date()

export function ProductInCartFactory(
  id = '',
  quantity = 0,
  product: IProductInStock = ProductInStockFactory(),
  note = '',
  createdAt: Date = now,
  updatedAt: Date = now
): ProductInCart {
  return new ProductInCart({
    id,
    quantity,
    product,
    note,
    createdAt,
    updatedAt
  })
}
