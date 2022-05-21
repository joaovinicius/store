import { TimestampsAndSoftDeletes } from '../../Base'
import { IState } from '../State'
import { ICity } from './ICity'

export class City extends TimestampsAndSoftDeletes implements ICity {
  public id: string
  public name: string
  public stateId: string
  public state?: IState

  constructor (props: ICity) {
    super(props)
    this.id = props.id
    this.name = props.name
    this.stateId = props.stateId
    this.state = props?.state
  }
}
