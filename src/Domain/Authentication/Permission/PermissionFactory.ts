import { Permission } from './Permission'

export function PermissionFactory (
  name: string = '',
  value: boolean = false
): Permission {
  return new Permission({ name, value })
}
