import { Category } from './Category'
import { ICategory } from './ICategory'

export function CategoryFactory (
  id = '',
  name = '',
  parentId = '',
  children: ICategory[] = [],
  createdAt: Date = new Date(),
  updatedAt: Date = new Date(),
  deletedAt: Date | undefined = undefined
): Category {
  return new Category({
    id,
    name,
    parentId,
    children,
    createdAt,
    updatedAt,
    deletedAt
  })
}
