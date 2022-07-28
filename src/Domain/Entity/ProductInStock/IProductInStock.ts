import { IProduct } from '../Product/IProduct'
import { IAttributeValue } from '../AttributeValue/IAttributeValue'
import { IBuy } from '../Buy/IBuy'

export interface IProductInStock {
  id: string,
  barcode: string,
  product: IProduct,
  attributeValues: IAttributeValue[],
  salePrice: number,
  purchasePrice: number,
  quantity: number,
  buy?: IBuy,
  createdAt: Date,
  updatedAt: Date,
  deletedAt?: Date
}
