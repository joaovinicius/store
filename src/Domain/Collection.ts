import { Pagination } from './Entity/Pagination/Pagination'
import { IPagination } from './Entity/Pagination/IPagination'

export interface ICollection {
  data: unknown[]
  pagination: IPagination
}

export class Collection {
  public data: unknown[]
  public pagination: Pagination

  constructor(props: ICollection) {
    this.data = props.data
    this.pagination = props.pagination
  }
}
