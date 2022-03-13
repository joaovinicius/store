import { IRecoveryPasswordToken } from './IRecoveryPasswordToken'

export class RecoveryPasswordToken implements IRecoveryPasswordToken {
  public readonly callback: string
  public login: string

  constructor (props: IRecoveryPasswordToken) {
    this.login = props.login
    this.callback = props.callback
  }
}
