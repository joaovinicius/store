import faker from 'faker'
import { ILinkedinAccessToken } from './ILinkedinAccessToken'
import { LinkedinAccessToken } from './LinkedinAccessToken'

export const LinkedinAccessTokenMock: ILinkedinAccessToken = new LinkedinAccessToken({
  grantType: faker.datatype.string(),
  code: faker.datatype.uuid(),
  clientId: faker.datatype.uuid(),
  redirectUri: faker.internet.url(),
  clientSecret: faker.datatype.uuid()
})
