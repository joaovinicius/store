import { IVerificationPasswordToken } from './IVerificationPasswordToken'

export class VerificationPasswordToken implements IVerificationPasswordToken {
  public readonly passwordToken: string

  constructor (props: IVerificationPasswordToken) {
    this.passwordToken = props.passwordToken
  }
}
