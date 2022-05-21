import { ISession } from '../../Domain/Authentication/Session/ISession'
import { ISocialAuthentication } from '../../Domain/Authentication/SocialAuthentication/ISocialAuthentication'
import { IAuthentication } from '../../Domain/Authentication/Authentication/IAuthentication'
import { IRecoveryPasswordToken } from '../../Domain/Authentication/RecoveryPasswordToken/IRecoveryPasswordToken'
import { IResetPasswordToken } from '../../Domain/Authentication/ResetPasswordToken/IResetPasswordToken'
import { IConfirmationAccountToken } from '../../Domain/Authentication/ConfirmationAccountToken/IConfirmationAccountToken'
import { IVerificationPasswordToken } from '../../Domain/Authentication/VerificationPasswordToken/IVerificationPasswordToken'

export interface Repository {
  requestSignIn(from: string, body: IAuthentication): Promise<ISession>,
  requestSignInWithSocial(from: string, body: ISocialAuthentication): Promise<ISession>,
  requestRecoveryUserPassword(from: string, body: IRecoveryPasswordToken): Promise<boolean>,
  requestResendUserPasswordRecoveryEmail(from: string, body: IRecoveryPasswordToken): Promise<boolean>,
  requestResetUserPassword(from: string, body: IResetPasswordToken): Promise<boolean>,
  requestValidateUserAccount(from: string, body: IConfirmationAccountToken): Promise<boolean>,
  requestUpdatePassword(from: string, body: IAuthentication): Promise<boolean>,
  requestValidateUserResetPasswordToken(from: string, body: IVerificationPasswordToken): Promise<boolean>,
}
