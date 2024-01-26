import faker from 'faker'
import { IComment } from '../../../../../src/Domain/Entity/Comment/IComment'
import { Comment } from '../../../../../src/Domain/Entity/Comment/Comment'
import { mock as UserMock } from '../Aggregate/User'
const now = new Date()

export const mock: IComment = new Comment({
  name: faker.name.firstName(),
  from: UserMock,
  message: faker.lorem.sentence(),
  createdAt: now,
  updatedAt: now
})
