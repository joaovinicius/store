import { AdminFactory } from '../../Aggregate/Admin/AdminFactory'
import { IAdmin } from '../../Aggregate/Admin/IAdmin'
import { Coupon } from './Coupon'
const now = new Date()

export function CouponFactory(
  id = '',
  code = '',
  discount = 0,
  limit = 0,
  startDate: Date = now,
  endDate: Date = now,
  isActive = false,
  createdBy: IAdmin = AdminFactory(),
  createdAt: Date = now,
  updatedAt: Date = now
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
    updatedAt
  })
}
