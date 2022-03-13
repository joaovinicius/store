import faker from 'faker'
import { Audience } from '../../../Infrastructure/Support/Contracts/AudienceType'
import { IVerificationPasswordToken } from './IVerificationPasswordToken'
import { VerificationPasswordToken } from './VerificationPasswordToken'

export const VerificationPasswordTokenMock: IVerificationPasswordToken = new VerificationPasswordToken({
  passwordToken: faker.datatype.uuid(),
  audience: Audience.CANDIDATE
})
