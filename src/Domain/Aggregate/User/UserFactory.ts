import { User } from './User'

const now = new Date()

export function UserFactory (
  id = '',
  name = '',
  email = '',
  userName = '',
  password = '',
  contact = undefined,
  createdAt = now,
  updatedAt = now,
  tenants = undefined,
  deletedAt= undefined
): User {
  return new User({
    id,
    name,
    email,
    userName,
    password,
    contact,
    createdAt,
    updatedAt,
    tenants,
    deletedAt
  })
}
