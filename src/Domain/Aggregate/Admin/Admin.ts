import { User } from '../User/User'
import { ModulePermission } from '../../Authentication/ModulePermission/ModulePermission'
import { IAdmin } from './IAdmin'

export class Admin extends User implements IAdmin {
  public modulePermissions: ModulePermission[]

  constructor (props: IAdmin) {
    super(props)
    this.modulePermissions = props.modulePermissions
  }
}
