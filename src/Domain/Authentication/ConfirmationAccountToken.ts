import { AudienceType } from '../../../Infrastructure/Support/Contracts/AudienceType'

export interface IConfirmationAccountToken {
  confirmationToken: string,
  audience: AudienceType
}
