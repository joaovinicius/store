import { Permission } from '../Permission/Permission'
import { ModulePermission } from './ModulePermission'

export function ModulePermissionFactory (
  name: string = '',
  permissions: Permission[] = []
): ModulePermission {
  return new ModulePermission({ name, permissions })
}
