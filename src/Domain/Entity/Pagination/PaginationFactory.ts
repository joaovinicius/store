import { OrderBy } from '../../ValueObject'
import { Pagination } from './Pagination'

export function PaginationFactory (
  page = 0,
  limit = 0,
  total = 0,
  pages = 0,
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
