import { VerificationPasswordToken } from './VerificationPasswordToken'

export function VerificationPasswordTokenFactory (
  passwordToken: string = ''
) {
  return new VerificationPasswordToken({ passwordToken })
}
