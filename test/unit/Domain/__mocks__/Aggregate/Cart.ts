import faker from 'faker'
import { ICart } from '../../../../../src/Domain/Aggregate/Cart/ICart'
import { Cart } from '../../../../../src/Domain/Aggregate/Cart/Cart'
import { mock as ProductInCartMock } from '../Entity/ProductInCart'
import { mock as CouponMock } from '../Entity/Coupon'
import { mock as ShippingMock } from '../Entity/Shipping'
import { mock as PaymentMock } from '../Entity/Payment'
const now = new Date()

export const mock: ICart = new Cart({
  id: faker.datatype.uuid(),
  products: [ProductInCartMock],
  coupon: CouponMock,
  shipping: ShippingMock,
  payment: PaymentMock,
  createdAt: now,
  updatedAt: now
})
