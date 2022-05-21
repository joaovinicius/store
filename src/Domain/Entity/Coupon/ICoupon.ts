import { IAdmin } from '../../Aggregate'
import { ITimestampsAndSoftDeletes } from '../../Base'

export interface ICoupon extends ITimestampsAndSoftDeletes {
  id?: string,
  code: string,
  discount: number,
  limit?: number,
  startDate: Date,
  endDate: Date,
  isActive: boolean,
  createdBy: IAdmin
}
