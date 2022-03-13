import { IResetPasswordToken } from './IResetPasswordToken'

export class ResetPasswordToken implements IResetPasswordToken {
  public password: string
  public passwordConfirmation: string
  public readonly passwordToken: string

  constructor (props: IResetPasswordToken) {
    this.password = props.password
    this.passwordConfirmation = props.passwordConfirmation
    this.passwordToken = props.passwordToken
  }
}
