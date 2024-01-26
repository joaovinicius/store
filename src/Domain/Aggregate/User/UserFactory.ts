import { User } from './User'

const now = new Date()

export function UserFactory (
  id = '',
  name = undefined,
  email = '',
  username = undefined,
  password = '',
  contact = undefined,
  createdAt = now,
  updatedAt = now,
  tenants = [],
  deletedAt= undefined
): User {
  return new User({
    id,
    name,
    email,
    username,
    password,
    contact,
    createdAt,
    updatedAt,
    tenants,
    deletedAt
  })
}
