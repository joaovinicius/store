import { ConfirmationAccountToken } from './ConfirmationAccountToken'

export function ConfirmationAccountTokenFactory (
  confirmationToken: string = ''
): ConfirmationAccountToken {
  return new ConfirmationAccountToken({ confirmationToken })
}
