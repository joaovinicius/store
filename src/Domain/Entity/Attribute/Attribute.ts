import { IAttribute } from './IAttribute'
import Validate from '../../../Support/Helper/Validator'
export class Attribute implements IAttribute {
  public id?: string
  public name: string
  public createdAt?: Date
  public updatedAt?: Date
  public deletedAt?: Date

  constructor(props: IAttribute) {
    Validate({
      name: ['isNotEmpty', 'isAlpha']
    }, props)

    this.id = props.id
    this.name = props.name
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
    this.deletedAt = props.deletedAt
  }
}
