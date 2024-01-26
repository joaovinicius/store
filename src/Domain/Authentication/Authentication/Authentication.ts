import { IAuthentication } from './IAuthentication'

export class Authentication implements IAuthentication {
  public tenantId: number
  public email: string
  public password?: string
  public passwordConfirmation?: string

  constructor(props: IAuthentication) {
    this.tenantId = props.tenantId
    this.email = props.email
    this.password = props?.password
    this.passwordConfirmation = props?.passwordConfirmation
  }
}
