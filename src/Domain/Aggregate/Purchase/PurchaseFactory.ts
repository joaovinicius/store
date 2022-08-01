import { IBilling } from '../../Entity/Billing/IBilling'
import { BillingFactory } from '../../Entity/Billing/BillingFactory'
import { Purchase } from './Purchase'
import { CartFactory, ICart } from '..'

export function PurchaseFactory (
  id = '',
  cart: ICart = CartFactory(),
  billing: IBilling = BillingFactory(),
  createdAt: Date = new Date(),
  updatedAt: Date = new Date(),
  deletedAt: Date | undefined = undefined
): Purchase {
  return new Purchase({
    id,
    cart,
    billing,
    createdAt,
    updatedAt,
    deletedAt
  })
}
