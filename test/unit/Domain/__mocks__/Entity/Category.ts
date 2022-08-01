import faker from 'faker'
import { ICategory } from '../../../../../src/Domain/Entity/Category/ICategory'
import { Category } from '../../../../../src/Domain/Entity/Category/Category'
const now = new Date()

export const mock: ICategory = new Category({
  id: faker.datatype.uuid(),
  name: faker.name.firstName(),
  createdAt: now,
  updatedAt: now
})
