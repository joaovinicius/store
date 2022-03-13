import { AudienceType } from '../../../Infrastructure/Support/Contracts/AudienceType'

export interface IResetPasswordToken {
  passwordToken: string,
  password: string,
  passwordConfirmation: string,
  audience: AudienceType
}
