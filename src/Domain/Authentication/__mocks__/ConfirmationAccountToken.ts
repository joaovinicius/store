import faker from 'faker'
import { Audience } from '../../../Infrastructure/Support/Contracts/AudienceType'
import { IConfirmationAccountToken } from './IConfirmationAccountToken'
import { ConfirmationAccountToken } from './ConfirmationAccountToken'

export const ConfirmationAccountTokenMock: IConfirmationAccountToken = new ConfirmationAccountToken({
  audience: Audience.CANDIDATE,
  confirmationToken: faker.datatype.uuid()
})
