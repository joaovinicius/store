import faker from 'faker'
import { IPagination } from '../../../../../src/Domain/Entity/Pagination/IPagination'
import { Pagination } from '../../../../../src/Domain/Entity/Pagination/Pagination'

export const mock: IPagination = new Pagination({
  id: faker.datatype.uuid(),
  name: faker.name.firstName(),
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: new Date()
})
