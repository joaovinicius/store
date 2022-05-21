import { AttributeFactory } from '../Attribute/AttributeFactory'
import { AttributeValue } from './AttributeValue'

export function AttributeValueFactory (
  id = '',
  name = '',
  attributeId = '',
  thumbnail = '',
  attribute = AttributeFactory(),
  createdAt = new Date(),
  updatedAt = new Date(),
  deletedAt = new Date()
): AttributeValue {
  return new AttributeValue({
    id,
    name,
    attributeId,
    thumbnail,
    attribute,
    createdAt,
    updatedAt,
    deletedAt
  })
}
