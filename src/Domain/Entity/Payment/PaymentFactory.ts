import { Payment } from './Payment'
const now = new Date()

export function PaymentFactory(
  id = '',
  name = '',
  createdAt = now,
  updatedAt = now,
  deletedAt = undefined  
): Payment {
  return new Payment({
    id,
    name,
    createdAt,
    updatedAt,
    deletedAt
  })
}
