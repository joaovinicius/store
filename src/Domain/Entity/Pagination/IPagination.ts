import { OrderBy } from '../../ValueObject/OrderBy'

export interface IPagination {
  page: number,
  limit: number,
  total: number,
  pages: number,
  orderBy?: OrderBy
}
