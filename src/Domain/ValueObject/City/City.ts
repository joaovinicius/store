import { IState } from '../State'
import { ICity } from './ICity'

export class City  implements ICity {
  public id: string
  public name: string
  public stateId: string
  public state?: IState
  public createdAt: Date
  public updatedAt: Date
  public deletedAt?: Date

  constructor (props: ICity) {
    this.id = props.id
    this.name = props.name
    this.stateId = props.stateId
    this.state = props?.state
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
    this.deletedAt = props.deletedAt
  }
}
