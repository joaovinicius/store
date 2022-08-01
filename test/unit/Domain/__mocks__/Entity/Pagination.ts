import faker from 'faker'
import { IPagination } from '../../../../../src/Domain/Entity/Pagination/IPagination'
import { Pagination } from '../../../../../src/Domain/Entity/Pagination/Pagination'

export const mock: IPagination = new Pagination({
  page: faker.datatype.number(),
  limit: faker.datatype.number(),
  total: faker.datatype.number(),
  pages: faker.datatype.number()
})
