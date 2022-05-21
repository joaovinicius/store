import { ConfirmationAccountToken } from './ConfirmationAccountToken'

export function ConfirmationAccountTokenFactory (
  confirmationToken = ''
): ConfirmationAccountToken {
  return new ConfirmationAccountToken({ confirmationToken })
}
