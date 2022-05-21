import faker from 'faker'
import { IAdmin } from '../../../../../src/Domain/Aggregate/Admin/IAdmin'
import { Admin } from '../../../../../src/Domain/Aggregate/Admin/Admin'

export const mock: IAdmin = new Admin({
  id: faker.random.uuid(),
  name: faker.name.firstName(),
  password: '',
  contact: ContactFactory(),
  modulePermissions: []
})
