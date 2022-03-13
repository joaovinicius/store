import faker from 'faker'
import { Audience } from '../../../Infrastructure/Support/Contracts/AudienceType'
import { IResetPasswordToken } from './IResetPasswordToken'
import { ResetPasswordToken } from './ResetPasswordToken'

const password = faker.internet.password()
export const ResetPasswordTokenMock: IResetPasswordToken = new ResetPasswordToken({
  password,
  passwordConfirmation: password,
  passwordToken: faker.datatype.uuid(),
  audience: Audience.CANDIDATE
})
