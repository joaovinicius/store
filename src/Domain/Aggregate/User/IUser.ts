import { ITenant } from '../../Authentication/Tenant'
import { IContact } from '../../Entity/Contact/IContact'

export interface IUser {
  id?: number,
  name?: string,
  email: string,
  username?: string,
  password: string,
  contact?: IContact,
  createdAt: Date,
  updatedAt: Date,
  deletedAt?: Date,
  tenants: ITenant[];
}
