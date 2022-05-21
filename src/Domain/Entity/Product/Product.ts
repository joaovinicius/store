import { TimestampsAndSoftDeletes } from '../../Base'
import { IProduct } from './IProduct'

export class Product extends TimestampsAndSoftDeletes implements IProduct {
  public id: string
  public name: string
  public description: string
  public brand: string
  public model: string

  constructor (props: IProduct) {
    super(props)
    this.id = props.id
    this.name = props.name
    this.description = props.description
    this.brand = props.brand
    this.model = props.model
  }
}
