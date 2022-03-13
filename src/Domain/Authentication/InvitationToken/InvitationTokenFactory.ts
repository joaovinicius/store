import { InvitationToken } from './InvitationToken'

export function InvitationTokenFactory (
  password: string = '',
  passwordConfirmation: string = '',
  invitationToken: string = ''
): InvitationToken {
  return new InvitationToken({ password, passwordConfirmation, invitationToken })
}
