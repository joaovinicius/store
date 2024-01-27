import faker from 'faker'
import { IAuthentication } from '../../../../../src/Domain/Authentication/Authentication/IAuthentication'
import { Authentication } from '../../../../../src/Domain/Authentication/Authentication'

export const mock: IAuthentication = new Authentication({
  tenantId: faker.datatype.number(),
  email: faker.internet.email(),
  password: faker.internet.password()
})
