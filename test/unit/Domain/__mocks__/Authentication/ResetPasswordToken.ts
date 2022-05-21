import faker from 'faker'
import { IResetPasswordToken } from '../../../../../src/Domain/Authentication/ResetPasswordToken/IResetPasswordToken'
import { ResetPasswordToken } from '../../../../../src/Domain/Authentication/ResetPasswordToken/ResetPasswordToken'

const password = faker.internet.password()
export const mock: IResetPasswordToken = new ResetPasswordToken({
  password,
  passwordConfirmation: password,
  passwordToken: faker.datatype.uuid()
})
