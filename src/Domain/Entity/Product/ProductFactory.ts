import { Product } from './Product'

export function ProductFactory (
  id = '',
  name = '',
  description = '',
  brand = '',
  model = '',
  createdAt: Date = new Date(),
  updatedAt: Date = new Date(),
  deletedAt: Date | undefined = undefined
): Product {
  return new Product({
    id,
    name,
    description,
    brand,
    model,
    createdAt,
    updatedAt,
    deletedAt
  })
}
