import { Billing } from './Billing'
const now = new Date()

export function BillingFactory(
  id = '',
  name = '',
  createdAt: Date = now,
  updatedAt: Date = now
): Billing {
  return new Billing({
    id,
    name,
    createdAt,
    updatedAt
  })
}
