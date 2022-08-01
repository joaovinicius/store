import { IContact } from '../Contact/IContact'
import { ISupplier } from './ISupplier'

export class Supplier implements ISupplier {
  public id: string
  public name: string
  public contact: IContact
  public createdAt: Date
  public updatedAt: Date
  public deletedAt?: Date

  constructor(props: ISupplier) {
    this.id = props.id
    this.name = props.name
    this.contact = props.contact
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
    this.deletedAt = props.deletedAt
  }
}
