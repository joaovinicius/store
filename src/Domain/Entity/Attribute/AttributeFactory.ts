import { Attribute } from './Attribute'
const now = new Date()

export function AttributeFactory(
  id = '',
  name = '',
  createdAt: Date = now,
  updatedAt: Date = now
): Attribute {
  return new Attribute({
    id,
    name,
    createdAt,
    updatedAt
  })
}
