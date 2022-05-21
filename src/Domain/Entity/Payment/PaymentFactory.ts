import { Payment } from './Payment'

export function PaymentFactory (
  id: string = '',
  name: string = '',
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
