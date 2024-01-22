import { Billing } from './Billing'
const now = new Date()

export function BillingFactory(
  id = '',
  name = '',
  createdAt= now,
  updatedAt= now,
  deletedAt = undefined  
): Billing {
  return new Billing({
    id,
    name,
    createdAt,
    updatedAt,
    deletedAt,
  })
}
