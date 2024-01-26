import { IAttribute } from '../Attribute/IAttribute'
import { IAttributeValue } from './IAttributeValue'

export class AttributeValue implements IAttributeValue {
  public id?: number
  public name: string
  public thumbnail: string
  public attribute?: IAttribute
  public createdAt: Date
  public updatedAt: Date
  public deletedAt?: Date

  constructor(props: IAttributeValue) {
    this.id = props.id
    this.name = props.name
    this.thumbnail = props.thumbnail
    this.attribute = props.attribute
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
    this.deletedAt = props.deletedAt
  }
}
