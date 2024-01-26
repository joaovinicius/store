import faker from 'faker'
import { ICoupon } from '../../../../../src/Domain/Entity/Coupon/ICoupon'
import { Coupon } from '../../../../../src/Domain/Entity/Coupon/Coupon'
import { mock as Admin} from '../Aggregate/Admin'
const now = new Date()

export const mock: ICoupon = new Coupon({
  code: faker.datatype.uuid(),
  discount: 0,
  limit: 0,
  startDate: now,
  endDate: now,
  isActive: false,
  createdBy: Admin,
  createdAt: now,
  updatedAt: now,
  deletedAt: now
})
