import { TimestampsAndSoftDeletes } from '../../Base'
import { IAddress } from '../Address/IAddress'
import { IContact } from './IContact'

export class Contact extends TimestampsAndSoftDeletes implements IContact {
  public id: string
  public email: string
  public phone: string
  public addresses: IAddress[]

  constructor (props: IContact) {
    super(props)
    this.id = props.id
    this.email = props.email
    this.phone = props.phone
    this.addresses = props.addresses
  }
}
