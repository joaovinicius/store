import { ITimestampsAndSoftDeletes } from '../../Base'
import { IProductInStock } from '../ProductInStock/IProductInStock'

export interface IProductInCart extends ITimestampsAndSoftDeletes {
  id: string,
  quantity: number,
  product: IProductInStock,
  note: string
}
