import { Permission } from '../Permission/Permission'
import { IModulePermission } from './IModulePermission'

export class ModulePermission implements IModulePermission {
  public name: string
  public permissions: Permission[]

  constructor (props: IModulePermission) {
    this.name = props.name
    this.permissions = props.permissions
  }
}
