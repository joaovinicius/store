import faker from 'faker'
import { Audience } from '../../../Infrastructure/Support/Contracts/AudienceType'
import { ISocialAuthentication } from './ISocialAuthentication'
import { SocialAuthentication } from './SocialAuthentication'

export const SocialAuthenticationMock: ISocialAuthentication = new SocialAuthentication({
  audience: Audience.CANDIDATE,
  token: faker.datatype.uuid()
})
