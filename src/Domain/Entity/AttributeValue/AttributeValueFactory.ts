import { AttributeFactory } from '../Attribute/AttributeFactory'
import { AttributeValue } from './AttributeValue'
const now = new Date()

export function AttributeValueFactory(
  id = '',
  name = '',
  thumbnail = '',
  attribute = AttributeFactory(),
  createdAt = now,
  updatedAt = now,
  deletedAt: Date | undefined = undefined 
): AttributeValue {
  return new AttributeValue({
    id,
    name,
    thumbnail,
    attribute,
    createdAt,
    updatedAt,
    deletedAt,
  })
}
