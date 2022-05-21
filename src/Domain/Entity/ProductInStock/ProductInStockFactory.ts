import { BuyFactory } from '../Buy'
import { ProductFactory } from '../Product/ProductFactory'
import { IProduct } from '../Product/IProduct'
import { IAttributeValue } from '../AttributeValue/IAttributeValue'
import { IBuy } from '../Buy/IBuy'
import { ProductInStock } from './ProductInStock'

export function ProductInStockFactory (
  id: string = '',
  barcode: string = '',
  product: IProduct = ProductFactory(),
  attributeValues: IAttributeValue[] = [],
  salePrice: number = 0,
  purchasePrice: number = 0,
  quantity: number = 0,
  buy: IBuy = BuyFactory(),
  createdAt: Date = new Date(),
  updatedAt: Date = new Date(),
  deletedAt: Date | undefined = undefined
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
