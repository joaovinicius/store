import { Attribute } from './Attribute'
const now = new Date()

export function AttributeFactory(
  id = '',
  name = '',
  createdAt: Date = now,
  updatedAt: Date = now,
  deletedAt: Date | undefined = undefined 
): Attribute {
  return new Attribute({
    id,
    name,
    createdAt,
    updatedAt,
    deletedAt,
  })
}
