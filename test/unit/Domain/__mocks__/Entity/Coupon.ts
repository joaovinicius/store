import faker from 'faker'
import { ICoupon } from '../../../../../src/Domain/Entity/Coupon/ICoupon'
import { Coupon } from '../../../../../src/Domain/Entity/Coupon/Coupon'
import { AdminFactory } from '../../../../../src/Domain/Aggregate'
const now = new Date()

export const mock: ICoupon = new Coupon({
  id: faker.datatype.uuid(),
  code: faker.datatype.uuid(),
  discount: 0,
  limit: 0,
  startDate: now,
  endDate: now,
  isActive: false,
  createdBy: AdminFactory(),
  createdAt: now,
  updatedAt: now,
  deletedAt: now
})
