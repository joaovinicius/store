import { OrderBy } from '../../ValueObject'
import { Pagination } from './Pagination'

export function PaginationFactory (
  page: number = 0,
  limit: number = 0,
  total: number = 0,
  pages: number = 0,
  orderBy: OrderBy = 'asc'
): Pagination {
  return new Pagination({
    page,
    limit,
    total,
    pages,
    orderBy
  })
}
