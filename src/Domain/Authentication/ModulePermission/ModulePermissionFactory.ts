import { Permission } from '../Permission/Permission'
import { ModulePermission } from './ModulePermission'

export function ModulePermissionFactory (
  name = '',
  permissions: Permission[] = []
): ModulePermission {
  return new ModulePermission({ name, permissions })
}
