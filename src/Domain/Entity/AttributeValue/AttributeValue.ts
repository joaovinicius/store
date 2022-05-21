import { TimestampsAndSoftDeletes } from '../../Base'
import { IAttribute } from '../Attribute/IAttribute'
import { IAttributeValue } from './IAttributeValue'

export class AttributeValue extends TimestampsAndSoftDeletes implements IAttributeValue {
  public id: string
  public name: string
  public attributeId: string
  public thumbnail: string
  public attribute?: IAttribute

  constructor (props: IAttributeValue) {
    super(props)
    this.id = props.id
    this.name = props.name
    this.attributeId = props.attributeId
    this.thumbnail = props.thumbnail
    this.attribute = props.attribute
  }
}
