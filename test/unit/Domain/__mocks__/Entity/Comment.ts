import faker from 'faker'
import { IComment } from '../../../../../src/Domain/Entity/Comment/IComment'
import { Comment } from '../../../../../src/Domain/Entity/Comment/Comment'
import { UserFactory } from '../../../../../src/Domain/Aggregate/User/UserFactory'

export const mock: IComment = new Comment({
  id: faker.datatype.uuid(),
  name: faker.name.firstName(),
  from: UserFactory(),
  message: '',
  parentId: '',
  children: [],
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: new Date()
})
