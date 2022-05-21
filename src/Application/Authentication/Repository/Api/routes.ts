import BaseRoutes from '../../../Infrastructure/Support/Helper/BaseRoutes'

class Routes extends BaseRoutes {
  constructor () {
    super('auth/v1')
  }

  get currentSession (): string {
    return `${this.baseUrl}/current`
  }

  get profile (): string {
    return this.currentSession
  }

  get signIn (): string {
    return `${this.baseUrl}/sign_in`
  }

  get signInWithFacebook (): string {
    return `${this.baseUrl}/oauth2/facebook`
  }

  get signInWithLinkedin (): string {
    return `${this.baseUrl}/oauth2/linkedin`
  }

  get recoveryUserPassword (): string {
    return `${this.baseUrl}/forgot_password`
  }

  get resendUserPasswordRecoveryEmail (): string {
    return `${this.baseUrl}/resend_confirmation`
  }

  get resetUserPassword (): string {
    return `${this.baseUrl}/reset_password`
  }

  get validateUserAccount (): string {
    return `${this.baseUrl}/confirm_account`
  }

  get validateUserResetPasswordToken (): string {
    return `${this.baseUrl}/verify_password_token`
  }

  get updatePassword (): string {
    return `${this.baseUrl}/update_password`
  }

  get linkedinRequestAccessToken (): string {
    return '/linkedin-access-token'
  }
}

const routes = new Routes()

export default routes
