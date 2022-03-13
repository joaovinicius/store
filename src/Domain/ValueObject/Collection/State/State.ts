import { IState } from './IState'

export class State implements IState {
  public id: string
  public name: string

  constructor (props: IState) {
    this.id = props.id
    this.name = props.name
  }
}
