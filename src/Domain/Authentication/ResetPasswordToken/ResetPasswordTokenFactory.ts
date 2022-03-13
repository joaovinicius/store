import { ResetPasswordToken } from './ResetPasswordToken'

export function ResetPasswordTokenFactory (
  passwordToken: string = '',
  password: string = '',
  passwordConfirmation: string = ''
): ResetPasswordToken {
  return new ResetPasswordToken({ passwordToken, password, passwordConfirmation })
}
