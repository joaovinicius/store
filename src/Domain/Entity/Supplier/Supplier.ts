import { TimestampsAndSoftDeletes } from '../../Base'
import { IContact } from '../Contact/IContact'
import { ISupplier } from './ISupplier'

export class Supplier extends TimestampsAndSoftDeletes implements ISupplier {
  public id: string
  public name: string
  public contact: IContact

  constructor (props: ISupplier) {
    super(props)
    this.id = props.id
    this.name = props.name
    this.contact = props.contact
  }
}
