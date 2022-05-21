import { TimestampsAndSoftDeletes } from '../../Base'
import { IBilling } from './IBilling'

export class Billing extends TimestampsAndSoftDeletes implements IBilling {
  public id: string
  public name: string

  constructor (props: IBilling) {
    super(props)
    this.id = props.id
    this.name = props.name
  }
}
