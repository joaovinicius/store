import { Shipping } from './Shipping'
const now = new Date()

export function ShippingFactory(
  id = '',
  name = '',
  createdAt: Date = now,
  updatedAt: Date = now
): Shipping {
  return new Shipping({
    id,
    name,
    createdAt,
    updatedAt
  })
}
