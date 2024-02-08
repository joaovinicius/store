import { IAuthentication } from './IAuthentication'
import Validator from '../../../Support/Helper/Validator'

export class Authentication implements IAuthentication {
  public tenantId: number
  public email: string
  public password: string
  public passwordConfirmation?: string

  constructor(props: IAuthentication, skipValidation = false) { 
    if (!skipValidation){
      this.validate(props)
    }

    this.tenantId = props.tenantId
    this.email = props.email
    this.password = props.password
    this.passwordConfirmation = props.passwordConfirmation
  }

  validate(props: IAuthentication){
    Validator({
      tenantId: ['isInt'],
      email: ['isEmail'],
      password: [{isLength: { min: 6}}],
    }, props)
  }

}
