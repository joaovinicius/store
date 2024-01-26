import { IShipping } from './IShipping'

export class Shipping implements IShipping {
  public id?: number
  public name: string
  public createdAt: Date
  public updatedAt: Date
  public deletedAt?: Date

  constructor(props: IShipping) {
    this.id = props.id
    this.name = props.name
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
    this.deletedAt = props.deletedAt
  }
}
