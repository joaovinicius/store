import { IModulePermission } from '../../Authentication/ModulePermission/IModulePermission'
import { IUser } from '../User/IUser'

export interface IAdmin {
  id: string,
  user: IUser,
  modulePermissions: IModulePermission[],
  createdAt: Date,
  updatedAt: Date,
  deletedAt?: Date
}
