import { IPermission } from '../Permission/IPermission'

export interface IModule {
  name: string
  permissions: IPermission[]
}
