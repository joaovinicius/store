import { ITenant } from '../../Authentication/Tenant'
import { IContact } from '../../Entity/Contact/IContact'

export interface IUser {
  id: string,
  name: string,
  email: string,
  userName: string,
  password: string,
  contact?: IContact,
  createdAt: Date,
  updatedAt: Date,
  deletedAt?: Date,
  tenants?: ITenant[];
}
