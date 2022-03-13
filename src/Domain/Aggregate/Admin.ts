import { User } from './User'
import { ModulePermission } from '../Authentication/ModulePermission'

export interface Admin extends User {
  modulePermissions: ModulePermission[]
}
