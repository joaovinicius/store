import { IAdmin } from '../../Aggregate/Admin/IAdmin'
import { TimestampsAndSoftDeletes } from '../../Base'
import { ICoupon } from './ICoupon'

export class Coupon extends TimestampsAndSoftDeletes implements ICoupon {
  public id?: string
  public code: string
  public discount: number
  public limit?: number
  public startDate: Date
  public endDate: Date
  public isActive: boolean
  public createdBy: IAdmin

  constructor(props: ICoupon) {
    super(props)
    this.id = props.id
    this.code = props.code
    this.discount = props.discount
    this.limit = props.limit
    this.startDate = props.startDate
    this.endDate = props.endDate
    this.isActive = props.isActive
    this.createdBy = props.createdBy
  }
}
