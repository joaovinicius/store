import { IProductInStock, ProductInStockFactory } from '../ProductInStock'
import { ProductInCart } from './ProductInCart'

export function ProductInCartFactory (
  id: string = '',
  quantity: number = 0,
  product: IProductInStock = ProductInStockFactory(),
  note: string = '',
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
