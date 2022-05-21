import { ITimestampsAndSoftDeletes } from '../../Base'
import { IProduct } from '../Product/IProduct'
import { IAttributeValue } from '../AttributeValue/IAttributeValue'
import { IBuy } from '../Buy/IBuy'

export interface IProductInStock extends ITimestampsAndSoftDeletes {
  id: string,
  barcode: string,
  product: IProduct,
  attributeValues: IAttributeValue[],
  salePrice: number,
  purchasePrice: number,
  quantity: number,
  buy?: IBuy
}
