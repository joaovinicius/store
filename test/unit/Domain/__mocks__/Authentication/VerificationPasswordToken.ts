import faker from 'faker'
import { IVerificationPasswordToken } from '../../../../../src/Domain/Authentication/VerificationPasswordToken/IVerificationPasswordToken'
import { VerificationPasswordToken } from '../../../../../src/Domain/Authentication/VerificationPasswordToken/VerificationPasswordToken'

export const mock: IVerificationPasswordToken = new VerificationPasswordToken({
  passwordToken: faker.datatype.uuid()
})
