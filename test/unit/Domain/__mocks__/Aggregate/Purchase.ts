import { IPurchase } from '../../../../../src/Domain/Aggregate/Purchase/IPurchase'
import { Purchase } from '../../../../../src/Domain/Aggregate/Purchase/Purchase'
import { mock as CartMock } from './Cart'
import { mock as BillingMock } from '../Entity/Billing'
const now = new Date()

export const mock: IPurchase = new Purchase({
  cart: CartMock,
  billing: BillingMock,
  createdAt: now,
  updatedAt: now
})
