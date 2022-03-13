import { AudienceType } from '../../../Infrastructure/Support/Contracts/AudienceType'

export interface IRecoveryPasswordToken {
  login: string,
  callback: string,
  audience: AudienceType
}
