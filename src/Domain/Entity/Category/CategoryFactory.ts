import { Category } from './Category'
import { ICategory } from './ICategory'

const now = new Date()

export function CategoryFactory(
  id = undefined,
  name = '',
  createdAt = now,
  updatedAt = now,
  children = undefined,
  deletedAt = undefined,
  parent = undefined
): Category {
  return new Category({
    id,
    name,
    createdAt,
    updatedAt,
    children,
    deletedAt,
    parent
  })
}
