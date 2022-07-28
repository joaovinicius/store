import { IAdmin } from '../../Aggregate'

export interface ICoupon {
  id?: string,
  code: string,
  discount: number,
  limit?: number,
  startDate: Date,
  endDate: Date,
  isActive: boolean,
  createdBy: IAdmin,
  createdAt: Date,
  updatedAt: Date,
  deletedAt?: Date
}
