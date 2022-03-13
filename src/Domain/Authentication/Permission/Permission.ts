import { IPermission } from './IPermission'

export class Permission implements IPermission {
  public value: boolean
  public name: string

  constructor (props: IPermission) {
    this.name = props.name
    this.value = props.value
  }
}
