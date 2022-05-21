import { AdminFactory } from '../../Aggregate/Admin/AdminFactory'
import { IAdmin } from '../../Aggregate/Admin/IAdmin'
import { Coupon } from './Coupon'

export function CouponFactory (
  id = '',
  code = '',
  discount = 0,
  limit = 0,
  startDate: Date = new Date(),
  endDate: Date = new Date(),
  isActive = false,
  createdBy: IAdmin = AdminFactory(),
  createdAt: Date = new Date(),
  updatedAt: Date = new Date(),
  deletedAt: Date | undefined = undefined
): Coupon {
  return new Coupon({
    id,
    code,
    discount,
    limit,
    startDate,
    endDate,
    isActive,
    createdBy,
    createdAt,
    updatedAt,
    deletedAt
  })
}
