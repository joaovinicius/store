import { Shipping } from './Shipping'

export function ShippingFactory (
  id = '',
  name = '',
  createdAt: Date = new Date(),
  updatedAt: Date = new Date(),
  deletedAt: Date | undefined = undefined
): Shipping {
  return new Shipping({
    id,
    name,
    createdAt,
    updatedAt,
    deletedAt
  })
}
