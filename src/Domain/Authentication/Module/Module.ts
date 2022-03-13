import { Permission } from '../Permission/Permission'
import { IModule } from './IModule'

export class Module implements IModule {
  public name: string
  public permissions: Permission[]

  constructor (props: IModule) {
    this.name = props.name
    this.permissions = props.permissions
  }
}
