import { State } from '../State/State'
import { ICity } from './ICity'

export class City implements ICity {
  public id: string
  public name: string
  public state: State

  constructor (props: ICity) {
    this.id = props.id
    this.name = props.name
    this.state = props.state
  }
}
