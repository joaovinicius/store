import { ITimestampsAndSoftDeletes } from '../../Base'
import { IAttribute } from '../Attribute/IAttribute'

export interface IAttributeValue extends ITimestampsAndSoftDeletes {
  id: string,
  name: string,
  attributeId: string,
  thumbnail: string,
  attribute?: IAttribute,
}
