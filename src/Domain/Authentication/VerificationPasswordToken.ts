import { AudienceType } from '../../../Infrastructure/Support/Contracts/AudienceType'

export interface IVerificationPasswordToken {
  passwordToken: string,
  audience: AudienceType
}
