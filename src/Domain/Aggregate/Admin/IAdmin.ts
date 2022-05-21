import { IModulePermission } from '../../Authentication/ModulePermission/IModulePermission'
import { IUser } from '../User/IUser'

export interface IAdmin extends IUser {
  modulePermissions: IModulePermission[]
}
