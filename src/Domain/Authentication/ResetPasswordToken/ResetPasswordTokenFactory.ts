import { ResetPasswordToken } from './ResetPasswordToken'

export function ResetPasswordTokenFactory (
  passwordToken = '',
  password = '',
  passwordConfirmation = ''
): ResetPasswordToken {
  return new ResetPasswordToken({ passwordToken, password, passwordConfirmation })
}
