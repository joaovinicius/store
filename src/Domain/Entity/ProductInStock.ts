import { Product } from "./Product"
import { AttributeValue } from "./AttributeValue"
import { Buy } from "./Buy"

export interface ProductInStock {
  id: string,
  barcode: string,
  product: Product,
  attributeValues: AttributeValue[],
  salePrice: number,
  purchasePrice: number,
  quantity: number,
  buy?: Buy
}
