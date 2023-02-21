import { OrderBy } from '../../ValueObject/OrderBy'
import { IPagination } from './IPagination'

export class Pagination implements IPagination {
  public page: number
  public limit: number
  public total: number
  public pages: number
  public orderBy?: OrderBy
  public q?: string | object

  constructor (props: IPagination) {
    this.page = props.page
    this.limit = props.limit
    this.total = props.total
    this.pages = props.pages
    this.orderBy = props.orderBy
    this.q = props.q
  }
}
