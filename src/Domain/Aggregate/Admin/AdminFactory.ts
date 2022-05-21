import { IModulePermission } from '../../Authentication/ModulePermission/IModulePermission'
import { ContactFactory } from '../../Entity/Contact/ContactFactory'
import { IContact } from '../../Entity/Contact/IContact'
import { Admin } from './Admin'

export function AdminFactory (
  id = '',
  name = '',
  password = '',
  contact: IContact = ContactFactory(),
  modulePermissions: IModulePermission[] = [],
  createdAt: Date = new Date(),
  updatedAt: Date = new Date(),
  deletedAt: Date | undefined = undefined
): Admin {
  return new Admin({
    id,
    name,
    password,
    contact,
    modulePermissions,
    createdAt,
    updatedAt,
    deletedAt
  })
}
