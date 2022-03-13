import { Attribute } from './Attribute';

export interface AttributeValue {
  id: string,
  name: string,
  attributeId: string,
  thumbnail: string,
  attribute?: Attribute,
}
