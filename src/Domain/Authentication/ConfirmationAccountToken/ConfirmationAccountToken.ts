import { IConfirmationAccountToken } from './IConfirmationAccountToken'

export class ConfirmationAccountToken implements IConfirmationAccountToken {
  public readonly confirmationToken: string

  constructor (props: IConfirmationAccountToken) {
    this.confirmationToken = props.confirmationToken
  }
}
