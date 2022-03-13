import { IGender } from './IGender'

export class Gender implements IGender {
  public id: number | string
  public name: string

  constructor (props: IGender) {
    this.id = props.id
    this.name = props.name
  }
}
