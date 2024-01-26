import { IAddress } from '../Address/IAddress'

export interface IContact {
  id?: number,
  email: string,
  phone: string,
  addresses: IAddress[],
  createdAt: Date,
  updatedAt: Date,
  deletedAt?: Date
}
