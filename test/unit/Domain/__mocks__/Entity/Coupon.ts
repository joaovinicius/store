import faker from 'faker'
import { ICoupon } from '../../../../../src/Domain/Entity/Coupon/ICoupon'
import { Coupon } from '../../../../../src/Domain/Entity/Coupon/Coupon'
import { AdminFactory } from '../../../../../src/Domain/Aggregate'

export const mock: ICoupon = new Coupon({
  id: faker.datatype.uuid(),
  code: faker.datatype.uuid(),
  discount: 0,
  limit: 0,
  startDate: new Date(),
  endDate: new Date(),
  isActive: false,
  createdBy: AdminFactory(),
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: new Date()
})
