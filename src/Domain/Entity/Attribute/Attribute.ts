import { IAttribute } from './IAttribute'

export class Attribute implements IAttribute {
  public id: string
  public name: string
  public createdAt: Date
  public updatedAt: Date
  public deletedAt?: Date

  constructor(props: IAttribute) {
    this.id = props.id
    this.name = props.name
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
    this.deletedAt = props.deletedAt
  }
}
