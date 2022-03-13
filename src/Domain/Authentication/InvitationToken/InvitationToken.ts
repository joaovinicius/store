import { IInvitationToken } from './IInvitationToken'

export class InvitationToken implements IInvitationToken {
  public password: string
  public passwordConfirmation: string
  public invitationToken: string

  constructor (props: IInvitationToken) {
    this.password = props.password
    this.passwordConfirmation = props.passwordConfirmation
    this.invitationToken = props.invitationToken
  }
}
