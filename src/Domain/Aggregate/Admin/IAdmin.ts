import { ITenant } from 'src/Domain/Authentication/Tenant'
import { IModulePermission } from '../../Authentication/ModulePermission/IModulePermission'
import { IUser } from '../User/IUser'

export interface IAdmin {
  id?: number,
  user: IUser,
  modulePermissions: IModulePermission[],
  createdAt: Date,
  updatedAt: Date,
  deletedAt?: Date
  tenants: ITenant[]
}
