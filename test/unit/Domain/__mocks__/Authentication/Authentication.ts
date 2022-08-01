import faker from 'faker'
import { IAuthentication } from '../../../../../src/Domain/Authentication/Authentication/IAuthentication'
import { Authentication } from '../../../../../src/Domain/Authentication/Authentication'

export const mock: IAuthentication = new Authentication({
  login: faker.internet.email()
})
