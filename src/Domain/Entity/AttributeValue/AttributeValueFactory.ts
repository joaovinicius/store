import { AttributeFactory } from '../Attribute/AttributeFactory'
import { AttributeValue } from './AttributeValue'
const now = new Date()

export function AttributeValueFactory(
  id = undefined,
  name = '',
  thumbnail = '',
  attribute = AttributeFactory(),
  createdAt = now,
  updatedAt = now,
  deletedAt = undefined 
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
