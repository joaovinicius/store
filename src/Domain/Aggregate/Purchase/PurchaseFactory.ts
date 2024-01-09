import { BillingFactory } from '../../Entity/Billing/BillingFactory'
import { Purchase } from './Purchase'
import { CartFactory } from '../Cart/CartFactory'

export function PurchaseFactory (
  id = '',
  cart  = CartFactory(),
  billing  = BillingFactory(),
  createdAt = new Date(),
  updatedAt = new Date(),
  deletedAt = undefined
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
