import faker from 'faker'
import { ISocialAuthentication } from '../../../../../src/Domain/Authentication/SocialAuthentication/ISocialAuthentication'
import { SocialAuthentication } from '../../../../../src/Domain/Authentication/SocialAuthentication/SocialAuthentication'

export const mock: ISocialAuthentication = new SocialAuthentication({
  token: faker.datatype.uuid()
})
