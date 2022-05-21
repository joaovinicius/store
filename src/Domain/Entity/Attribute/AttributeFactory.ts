import { Attribute } from './Attribute'

export function AttributeFactory (
  id: string = '',
  name: string = '',
  createdAt: Date = new Date(),
  updatedAt: Date = new Date(),
  deletedAt: Date | undefined = undefined
): Attribute {
  return new Attribute({
    id,
    name,
    createdAt,
    updatedAt,
    deletedAt
  })
}
