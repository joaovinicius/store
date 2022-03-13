import { OrderBy } from "../ValueObject/OrderBy";

export interface Pagination {
  page: number,
  limit: number,
  total: number,
  pages: number,
  orderBy?: OrderBy,
}
