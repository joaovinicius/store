import faker from 'faker'
import { AttributeFactory } from '../../../../../src/Domain/Entity/Attribute/AttributeFactory'
import { IAttributeValue } from '../../../../../src/Domain/Entity/AttributeValue/IAttributeValue'
import { AttributeValue } from '../../../../../src/Domain/Entity/AttributeValue/AttributeValue'

export const mock: IAttributeValue = new AttributeValue({
  id: faker.datatype.uuid(),
  name: faker.name.firstName(),
  attributeId: faker.datatype.uuid(),
  thumbnail: faker.image.imageUrl(),
  attribute: AttributeFactory(),
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: new Date()
})
