import { BuyFactory } from '../Buy'
import { ProductFactory } from '../Product/ProductFactory'
import { IProduct } from '../Product/IProduct'
import { IAttributeValue } from '../AttributeValue/IAttributeValue'
import { IBuy } from '../Buy/IBuy'
import { ProductInStock } from './ProductInStock'

export function ProductInStockFactory (
  id = '',
  barcode = '',
  product: IProduct = ProductFactory(),
  attributeValues: IAttributeValue[] = [],
  salePrice = 0,
  purchasePrice = 0,
  quantity = 0,
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
