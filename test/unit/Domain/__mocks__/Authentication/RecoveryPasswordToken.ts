import faker from 'faker'
import { IRecoveryPasswordToken } from '../../../../../src/Domain/Authentication/RecoveryPasswordToken/IRecoveryPasswordToken'
import { RecoveryPasswordToken } from '../../../../../src/Domain/Authentication/RecoveryPasswordToken/RecoveryPasswordToken'

export const mock: IRecoveryPasswordToken = new RecoveryPasswordToken({
  login: faker.internet.email(),
  callback: faker.internet.url()
})
