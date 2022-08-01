import { Category } from './Category'
import { ICategory } from './ICategory'
const now = new Date()

export function CategoryFactory(
  id = '',
  name = '',
  createdAt: Date = now,
  updatedAt: Date = now
): Category {
  return new Category({
    id,
    name,
    createdAt,
    updatedAt
  })
}
