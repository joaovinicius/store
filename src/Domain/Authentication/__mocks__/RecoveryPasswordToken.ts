import faker from 'faker'
import { Audience } from '../../../Infrastructure/Support/Contracts/AudienceType'
import { IRecoveryPasswordToken } from './IRecoveryPasswordToken'
import { RecoveryPasswordToken } from './RecoveryPasswordToken'

export const RecoveryPasswordTokenMock: IRecoveryPasswordToken = new RecoveryPasswordToken({
  login: faker.internet.email(),
  callback: faker.internet.url(),
  audience: Audience.CANDIDATE
})
