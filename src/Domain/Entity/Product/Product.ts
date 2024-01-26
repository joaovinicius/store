import { IProduct } from './IProduct'

export class Product implements IProduct {
  public id?: number
  public name: string
  public description: string
  public brand: string
  public model: string
  public createdAt: Date
  public updatedAt: Date
  public deletedAt?: Date

  constructor(props: IProduct) {
    this.id = props.id
    this.name = props.name
    this.description = props.description
    this.brand = props.brand
    this.model = props.model
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
    this.deletedAt = props.deletedAt
  }
}
