import { RecoveryPasswordToken } from './RecoveryPasswordToken'

export function RecoveryPasswordTokenFactory (
  login: string = '',
  callback: string = 'http://lvh.localhost/reset-password?token=:token'
): RecoveryPasswordToken {
  return new RecoveryPasswordToken({ login, callback })
}
