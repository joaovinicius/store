import { IProductInStock } from '../ProductInStock/IProductInStock'

export interface IProductInCart {
  id: string,
  quantity: number,
  product: IProductInStock,
  note: string,
  createdAt: Date,
  updatedAt: Date,
  deletedAt?: Date
}
