import faker from 'faker'
import { IAttributeValue } from '../../../../../src/Domain/Entity/AttributeValue/IAttributeValue'
import { AttributeValue } from '../../../../../src/Domain/Entity/AttributeValue/AttributeValue'
import { mock as AttributeMock } from './Attribute'
const now = new Date()

export const mock: IAttributeValue = new AttributeValue({
  name: faker.name.firstName(),
  thumbnail: faker.image.imageUrl(),
  attribute: AttributeMock,
  createdAt: now,
  updatedAt: now
})
