import { VerificationPasswordToken } from './VerificationPasswordToken'

export function VerificationPasswordTokenFactory (
  passwordToken = ''
) {
  return new VerificationPasswordToken({ passwordToken })
}
