import { Billing } from './Billing'

export function BillingFactory (
  id: string = '',
  name: string = '',
  createdAt: Date = new Date(),
  updatedAt: Date = new Date(),
  deletedAt: Date | undefined = undefined
): Billing {
  return new Billing({
    id,
    name,
    createdAt,
    updatedAt,
    deletedAt
  })
}
