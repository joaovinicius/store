import { IContact } from '../Contact/IContact'

export interface ISupplier {
  id: string,
  name: string,
  contact: IContact,
  createdAt: Date,
  updatedAt: Date,
  deletedAt?: Date
}
