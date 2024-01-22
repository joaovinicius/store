import { Product } from './Product'
const now = new Date()

export function ProductFactory(
  id = '',
  name = '',
  description = '',
  brand = '',
  model = '',
  createdAt = now,
  updatedAt = now,
  deletedAt = undefined 
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
