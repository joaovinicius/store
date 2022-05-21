import { Payment } from './Payment'

export function PaymentFactory (
  id = '',
  name = '',
  createdAt: Date = new Date(),
  updatedAt: Date = new Date(),
  deletedAt: Date | undefined = undefined
): Payment {
  return new Payment({
    id,
    name,
    createdAt,
    updatedAt,
    deletedAt
  })
}
