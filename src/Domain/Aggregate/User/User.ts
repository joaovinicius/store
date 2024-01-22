import { ITenant } from '../../Authentication/Tenant'
import { IContact } from '../../Entity/Contact/IContact'
import { IUser } from './IUser'

export class User implements IUser {
  public id: string
  public name: string
  public password: string
  public contact?: IContact
  public createdAt: Date
  public updatedAt: Date
  public deletedAt?: Date
  public tenants: ITenant[];

  constructor (props: IUser) {
    this.id = props.id
    this.name = props.name
    this.password = props.password
    this.contact = props.contact
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
    this.deletedAt = props.deletedAt
    this.tenants = props.tenants
  }
}
