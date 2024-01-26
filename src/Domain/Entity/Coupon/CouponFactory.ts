import { AdminFactory } from '../../Aggregate/Admin/AdminFactory'
import { Coupon } from './Coupon'
const now = new Date()

export function CouponFactory(
  id = undefined,
  code = '',
  discount = 0,
  limit = 0,
  startDate = now,
  endDate = now,
  isActive = false,
  createdBy = AdminFactory(),
  createdAt = now,
  updatedAt = now,
  deletedAt = undefined 
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
