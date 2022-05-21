import { IProductInStock, ProductInStockFactory } from '../ProductInStock'
import { ProductInCart } from './ProductInCart'

export function ProductInCartFactory (
  id = '',
  quantity = 0,
  product: IProductInStock = ProductInStockFactory(),
  note = '',
  createdAt: Date = new Date(),
  updatedAt: Date = new Date(),
  deletedAt: Date | undefined = undefined
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
