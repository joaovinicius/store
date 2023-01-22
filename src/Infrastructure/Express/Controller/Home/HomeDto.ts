import { IAttribute, Attribute } from '../../../../Domain'
export interface IHomeDto extends IAttribute {
  casa: string
}

export default class HomeDto extends Attribute implements IHomeDto {
  public casa: string

  constructor(props: IHomeDto) {
    super(props);
    this.casa = props.casa
  }
}
