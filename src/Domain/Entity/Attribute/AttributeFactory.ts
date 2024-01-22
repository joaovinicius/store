import { Attribute } from './Attribute'
const now = new Date()

export function AttributeFactory(
  id = '',
  name = '',
  createdAt= now,
  updatedAt= now,
  deletedAt = undefined 
): Attribute {
  return new Attribute({
    id,
    name,
    createdAt,
    updatedAt,
    deletedAt,
  })
}
