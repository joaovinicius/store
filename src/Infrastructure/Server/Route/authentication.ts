import { type IRoute } from './IRoute.js'
import AuthController from '../Controller/AuthenticationController.js'
import PublicMiddleware from '../Middleware/PublicMiddleware.js'

const PREFIX = 'authentication'
const authController = new AuthController()

const routes: IRoute[] = [
  {
    path: `${PREFIX}/sign-in`,
    method: 'get',
    middeware: PublicMiddleware,
    controller: authController.requestSignIn
  },
  {
    path: `${PREFIX}/sign-in-with-social`,
    method: 'get',
    middeware: PublicMiddleware,
    controller: authController.requestSignInWithSocial
  },
  {
    path: `${PREFIX}/recovery-user-password`,
    method: 'get',
    middeware: PublicMiddleware,
    controller: authController.requestRecoveryUserPassword
  },
  {
    path: `${PREFIX}/resend-user-password-recovery-email`,
    method: 'get',
    middeware: PublicMiddleware,
    controller: authController.requestResendUserPasswordRecoveryEmail
  },
  {
    path: `${PREFIX}/reset-user-password`,
    method: 'get',
    middeware: PublicMiddleware,
    controller: authController.requestResetUserPassword
  },
  {
    path: `${PREFIX}/validate-user-account`,
    method: 'get',
    middeware: PublicMiddleware,
    controller: authController.requestValidateUserAccount
  },
  {
    path: `${PREFIX}/update-password`,
    method: 'get',
    middeware: PublicMiddleware,
    controller: authController.requestUpdatePassword
  },
  {
    path: `${PREFIX}/validate-user-reset-password-token`,
    method: 'get',
    middeware: PublicMiddleware,
    controller: authController.requestValidateUserResetPasswordToken
  }
]

export default routes
