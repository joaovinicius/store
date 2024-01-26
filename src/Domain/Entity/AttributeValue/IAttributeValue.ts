import { IAttribute } from '../Attribute/IAttribute'

export interface IAttributeValue {
  id?: number
  name: string
  thumbnail: string
  attribute?: IAttribute
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}
