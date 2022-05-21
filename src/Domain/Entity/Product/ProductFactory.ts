import { Product } from './Product'

export function ProductFactory (
  id: string = '',
  name: string = '',
  description: string = '',
  brand: string = '',
  model: string = '',
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
