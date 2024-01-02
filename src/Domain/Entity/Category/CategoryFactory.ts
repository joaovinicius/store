import { Category } from './Category'
import { ICategory } from './ICategory'

const now = new Date()

export function CategoryFactory(
  id = '',
  name = '',
  createdAt: Date = now,
  updatedAt: Date = now,
  children: ICategory[] | undefined = undefined,
  deletedAt: Date | undefined = undefined,
  parent: ICategory | undefined = undefined
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
