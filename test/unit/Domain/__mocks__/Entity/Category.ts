import faker from 'faker'
import { ICategory } from '../../../../../src/Domain/Entity/Category/ICategory'
import { Category } from '../../../../../src/Domain/Entity/Category/Category'

export const mock: ICategory = new Category({
  id: faker.datatype.uuid(),
  name: faker.name.firstName(),
  parentId: '',
  children: [],
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: new Date()
})
