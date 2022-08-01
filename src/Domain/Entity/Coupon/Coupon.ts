import { IAdmin } from '../../Aggregate/Admin/IAdmin'

import { ICoupon } from './ICoupon'

export class Coupon implements ICoupon {
  public id?: string
  public code: string
  public discount: number
  public limit?: number
  public startDate: Date
  public endDate: Date
  public isActive: boolean
  public createdBy: IAdmin
  public createdAt: Date
  public updatedAt: Date
  public deletedAt?: Date

  constructor(props: ICoupon) {
    this.id = props.id
    this.code = props.code
    this.discount = props.discount
    this.limit = props.limit
    this.startDate = props.startDate
    this.endDate = props.endDate
    this.isActive = props.isActive
    this.createdBy = props.createdBy
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
    this.deletedAt = props.deletedAt
  }
}
