import { IAttribute } from '../Attribute/IAttribute'

export interface IAttributeValue {
  id: string,
  name: string,
  attributeId: string,
  thumbnail: string,
  attribute?: IAttribute,
  createdAt: Date,
  updatedAt: Date,
  deletedAt?: Date
}
