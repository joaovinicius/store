import { TimestampsAndSoftDeletes } from '../../Base'
import { IShipping } from './IShipping'

export class Shipping extends TimestampsAndSoftDeletes implements IShipping {
  public id: string
  public name: string

  constructor (props: IShipping) {
    super(props)
    this.id = props.id
    this.name = props.name
  }
}
