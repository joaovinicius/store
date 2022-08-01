import { BuyFactory } from '../Buy'
import { ProductFactory } from '../Product/ProductFactory'
import { IProduct } from '../Product/IProduct'
import { IAttributeValue } from '../AttributeValue/IAttributeValue'
import { IBuy } from '../Buy/IBuy'
import { ProductInStock } from './ProductInStock'
const now = new Date()

export function ProductInStockFactory(
  id = '',
  barcode = '',
  product: IProduct = ProductFactory(),
  attributeValues: IAttributeValue[] = [],
  salePrice = 0,
  purchasePrice = 0,
  quantity = 0,
  buy: IBuy = BuyFactory(),
  createdAt: Date = now,
  updatedAt: Date = now
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
    updatedAt
  })
}
