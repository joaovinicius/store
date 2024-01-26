import faker from 'faker'
import { ILinkedinAccessToken } from '../../../../../src/Domain/Authentication/LinkedinAccessToken/ILinkedinAccessToken'
import { LinkedinAccessToken } from '../../../../../src/Domain/Authentication/LinkedinAccessToken/LinkedinAccessToken'

export const mock: ILinkedinAccessToken = new LinkedinAccessToken({
  grantType: faker.datatype.string(),
  code: faker.datatype.uuid(),
clientId: faker.datatype.uuid(),
  redirectUri: faker.internet.url(),
  clientSecret: faker.datatype.uuid()
})
