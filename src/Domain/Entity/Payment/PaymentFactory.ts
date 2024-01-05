import { Payment } from './Payment'
const now = new Date()

export function PaymentFactory(
  id = '',
  name = '',
  createdAt: Date = now,
  updatedAt: Date = now,
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
