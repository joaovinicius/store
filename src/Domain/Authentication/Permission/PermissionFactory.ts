import { Permission } from './Permission'

export function PermissionFactory (
  name = '',
  value = false
): Permission {
  return new Permission({ name, value })
}
