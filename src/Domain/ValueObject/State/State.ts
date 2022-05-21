import { TimestampsAndSoftDeletes } from '../../Base'
import { IState } from './IState'

export class State extends TimestampsAndSoftDeletes implements IState {
  public id: string
  public name: string
  public abbr: string

  constructor (props: IState) {
    super(props)
    this.id = props.id
    this.name = props.name
    this.abbr = props.abbr
  }
}
