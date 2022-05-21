import { HttpClient } from '../../../Infrastructure/Support/Contracts/HttpClient'
import CommandFactory from '../../../Infrastructure/Support/Factory/CommandFactory'
import {
  Session,
  SocialAuthentication,
  RecoveryPasswordToken,
  ResetPasswordToken,
  ConfirmationAccountToken,
  VerificationPasswordToken
} from '../../../Domain/Authentication'

import RequestUpdatePassword from '../../../BoundedContext/Authentication/UseCase/RequestUpdatePassword'
import RequestRecoveryUserPassword from '../../../BoundedContext/Authentication/UseCase/RequestRecoveryUserPassword'
import RequestResendUserPasswordRecoveryEmail from '../../../BoundedContext/Authentication/UseCase/RequestResendUserPasswordRecoveryEmail'
import RequestResetUserPassword from '../../../BoundedContext/Authentication/UseCase/RequestResetUserPassword'
import RequestValidateUserAccount from '../../../BoundedContext/Authentication/UseCase/RequestValidateUserAccount'
import RequestValidateUserResetPasswordToken from '../../../BoundedContext/Authentication/UseCase/RequestValidateUserResetPasswordToken'
import RequestSignIn from '../../../BoundedContext/Authentication/UseCase/RequestSignIn'
import RequestSignInWithSocial from '../../../BoundedContext/Authentication/UseCase/RequestSignInWithSocial'

import { Repository } from '../../../BoundedContext/Authentication/Repository'
import { ApiRepository } from './ApiRepository'
import routes from './Routes'

import { RequestUpdatePasswordDTO } from './DataTransferObject/RequestUpdatePasswordDTO'
import { RequestSignInDTO } from './DataTransferObject/RequestSignInDTO'

import AuthenticationDM from './DataMapper/AuthenticationDM'
import RecoverPasswordTokenDM from './DataMapper/RecoverPasswordTokenDM'
import ConfirmationAccountTokenDM from './DataMapper/ConfirmationAccountTokenDM'
import ResetPasswordTokenDM from './DataMapper/ResetPasswordTokenDM'
import VerificationPasswordTokenDM from './DataMapper/VerificationPasswordTokenDM'
import SocialAuthenticationDM from './DataMapper/SocialAuthenticationDM'
import LinkedinRequestAccessTokenDM from './DataMapper/LinkedinRequestAccessTokenDM'

export class Service {
  public repository: Repository

  constructor (httpClient: HttpClient) {
    this.repository = new ApiRepository(httpClient)
  }

  requestSignIn (body: RequestSignInDTO): Promise<Session> {
    const command = CommandFactory(this.repository, RequestSignIn)
    const data = AuthenticationDM.fromEntityToRequestData(body)

    return command.execute(routes.signIn, data)
  }

  requestSignInWithSocial (body: SocialAuthentication): Promise<Session> {
    const command = CommandFactory(this.repository, RequestSignInWithSocial)
    const data = SocialAuthenticationDM.fromEntityToRequestData(body)

    return command.execute(routes.signInWithFacebook, data)
  }

  requestSignInWithFacebook (body: SocialAuthentication): Promise<Session> {
    return this.requestSignInWithSocial(body)
  }

  requestRecoveryUserPassword (body: RecoveryPasswordToken): Promise<boolean> {
    const command = CommandFactory(this.repository, RequestRecoveryUserPassword)
    const data = RecoverPasswordTokenDM.fromEntityToRequestData(body)

    return command.execute(routes.recoveryUserPassword, data)
  }

  requestResendUserPasswordRecoveryEmail (body: RecoveryPasswordToken): Promise<boolean> {
    const command = CommandFactory(this.repository, RequestResendUserPasswordRecoveryEmail)
    const data = RecoverPasswordTokenDM.fromEntityToRequestData(body)

    return command.execute(routes.resendUserPasswordRecoveryEmail, data)
  }

  requestResetUserPassword (body: ResetPasswordToken): Promise<boolean> {
    const command = CommandFactory(this.repository, RequestResetUserPassword)
    const data = ResetPasswordTokenDM.fromEntityToRequestData(body)

    return command.execute(routes.resetUserPassword, data)
  }

  requestValidateUserAccount (body: ConfirmationAccountToken): Promise<boolean> {
    const command = CommandFactory(this.repository, RequestValidateUserAccount)
    const data = ConfirmationAccountTokenDM.fromEntityToRequestData(body)

    return command.execute(routes.validateUserAccount, data)
  }

  requestValidateUserResetPasswordToken (body: VerificationPasswordToken): Promise<boolean> {
    const command = CommandFactory(this.repository, RequestValidateUserResetPasswordToken)
    const data = VerificationPasswordTokenDM.fromEntityToRequestData(body)

    return command.execute(routes.validateUserResetPasswordToken, data)
  }

  requestUpdatePassword (data: RequestUpdatePasswordDTO): Promise<boolean> {
    const command = CommandFactory(this.repository, RequestUpdatePassword)

    return command.execute(routes.updatePassword, data)
  }
}
