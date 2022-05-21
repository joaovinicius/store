import { TimestampsAndSoftDeletes } from '../../Base'
import { IPayment } from './IPayment'

export class Payment extends TimestampsAndSoftDeletes implements IPayment {
  public id: string
  public name: string

  constructor (props: IPayment) {
    super(props)
    this.id = props.id
    this.name = props.name
  }
}
