import { IPayment } from './IPayment'

export class Payment implements IPayment {
  public id?: number
  public name: string
  public createdAt: Date
  public updatedAt: Date
  public deletedAt?: Date

  constructor(props: IPayment) {
    this.id = props.id
    this.name = props.name
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
    this.deletedAt = props.deletedAt
  }
}
