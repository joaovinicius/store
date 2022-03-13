import faker from 'faker'
import { Audience } from '../../../Infrastructure/Support/Contracts/AudienceType'
import { IAuthentication } from './IAuthentication'
import { Authentication } from './Authentication'

const password = faker.internet.password()
export const AuthenticationMock: IAuthentication = new Authentication({
  login: faker.internet.email(),
  password,
  passwordConfirmation: password,
  audience: Audience.CANDIDATE
})
