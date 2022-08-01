import { IAuthentication } from './IAuthentication'

export class Authentication implements IAuthentication {
  public password?: string
  public passwordConfirmation?: string
  public login: string

  constructor(props: IAuthentication) {
    this.login = props.login
    this.password = props?.password
    this.passwordConfirmation = props?.passwordConfirmation
  }
}
