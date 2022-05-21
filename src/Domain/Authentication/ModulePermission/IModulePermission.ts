import { IPermission } from '../Permission/IPermission'

export interface IModulePermission {
  name: string
  permissions: IPermission[]
}
