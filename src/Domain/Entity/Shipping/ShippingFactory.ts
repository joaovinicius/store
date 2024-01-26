import { Shipping } from './Shipping'
const now = new Date()

export function ShippingFactory(
  id = undefined,
  name = '',
  createdAt = now,
  updatedAt = now, 
  deletedAt = undefined 
): Shipping {
  return new Shipping({
    id,
    name,
    createdAt,
    updatedAt,
    deletedAt
  })
}
