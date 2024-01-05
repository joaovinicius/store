import { Product } from './Product'
const now = new Date()

export function ProductFactory(
  id = '',
  name = '',
  description = '',
  brand = '',
  model = '',
  createdAt: Date = now,
  updatedAt: Date = now,
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
