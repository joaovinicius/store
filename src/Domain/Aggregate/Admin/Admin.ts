import { User } from '../User/User'
import { ModulePermission } from '../../Authentication/ModulePermission/ModulePermission'
import { IAdmin } from './IAdmin'

export class Admin implements IAdmin {
  public id: string
  public user: User
  public modulePermissions: ModulePermission[]
  public createdAt: Date
  public updatedAt: Date
  public deletedAt?: Date

  constructor (props: IAdmin) {
    this.id = props.id
    this.user = props.user
    this.modulePermissions = props.modulePermissions
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
    this.deletedAt = props.deletedAt
  }
}
