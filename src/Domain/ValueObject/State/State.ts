import { IState } from './IState'

export class State implements IState {
  public id?: number
  public name: string
  public abbr: string
  public createdAt: Date
  public updatedAt: Date
  public deletedAt?: Date

  constructor (props: IState) {
    this.id = props.id
    this.name = props.name
    this.abbr = props.abbr
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
    this.deletedAt = props.deletedAt
  }
}
