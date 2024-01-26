import { IAddress } from '../Address/IAddress'
import { IContact } from './IContact'

export class Contact implements IContact {
  public id?: number
  public email: string
  public phone: string
  public addresses: IAddress[]
  public createdAt: Date
  public updatedAt: Date
  public deletedAt?: Date

  constructor(props: IContact) {
    this.id = props.id
    this.email = props.email
    this.phone = props.phone
    this.addresses = props.addresses
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
    this.deletedAt = props.deletedAt
  }
}
