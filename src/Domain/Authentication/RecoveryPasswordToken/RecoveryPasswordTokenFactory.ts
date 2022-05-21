import { RecoveryPasswordToken } from './RecoveryPasswordToken'

export function RecoveryPasswordTokenFactory (
  login = '',
  callback = 'http://lvh.localhost/reset-password?token=:token'
): RecoveryPasswordToken {
  return new RecoveryPasswordToken({ login, callback })
}
