import { TimestampsAndSoftDeletes } from '../../Base'
import { IAttribute } from './IAttribute'

export class Attribute extends TimestampsAndSoftDeletes implements IAttribute {
  public id: string
  public name: string

  constructor (props: IAttribute) {
    super(props)
    this.id = props.id
    this.name = props.name
  }
}
