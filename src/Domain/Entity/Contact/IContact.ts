import { IAddress } from '../Address/IAddress'

export interface IContact {
  id: string,
  email: string,
  phone: string,
  addresses: IAddress[],
  createdAt: Date,
  updatedAt: Date,
  deletedAt?: Date
}
