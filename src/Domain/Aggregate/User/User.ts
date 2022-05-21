import { IContact } from '../../Entity/Contact/IContact'
import { TimestampsAndSoftDeletes } from '../../Base'
import { IUser } from './IUser'

export class User extends TimestampsAndSoftDeletes implements IUser {
  public id: string
  public name: string
  public password: string
  public contact: IContact

  constructor (props: IUser) {
    super(props)
    this.id = props.id
    this.name = props.name
    this.password = props.password
    this.contact = props.contact
  }
}
