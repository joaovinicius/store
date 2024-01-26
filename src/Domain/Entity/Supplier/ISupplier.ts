import { IContact } from '../Contact/IContact'

export interface ISupplier {
  id?: number,
  name: string,
  contact: IContact,
  createdAt: Date,
  updatedAt: Date,
  deletedAt?: Date
}
