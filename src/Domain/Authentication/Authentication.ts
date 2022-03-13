import { AudienceType } from '../../../Infrastructure/Support/Contracts/AudienceType'

export interface IAuthentication {
  login?: string,
  password?: string,
  passwordConfirmation?: string,
  audience: AudienceType
}
