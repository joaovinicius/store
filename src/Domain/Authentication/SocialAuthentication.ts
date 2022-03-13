import { AudienceType } from '../../../Infrastructure/Support/Contracts/AudienceType'

export interface ISocialAuthentication {
  token: string,
  audience: AudienceType
}
