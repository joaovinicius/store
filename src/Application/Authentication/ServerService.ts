
import { db } from '../../Infrastructure/Knex/Authentication/knexfile'
import { IAuthentication } from '../../Domain/Authentication/Authentication/IAuthentication'
import { ISession } from '../../Domain/Authentication/Session/ISession'
import PostgresRepository from './Repository/PostgresRepository'

export interface AuthenticationServerService{
    requestSignIn(body: IAuthentication): Promise<ISession>
    // requestSignInWithSocial(
    //   from: string,
    //   body: ISocialAuthentication
    // ): Promise<ISession>
    // requestRecoveryUserPassword(
    //   from: string,
    //   body: IRecoveryPasswordToken
    // ): Promise<boolean>
    // requestResendUserPasswordRecoveryEmail(
    //   from: string,
    //   body: IRecoveryPasswordToken
    // ): Promise<boolean>
    // requestResetUserPassword(
    //   from: string,
    //   body: IResetPasswordToken
    // ): Promise<boolean>
    // requestValidateUserAccount(
    //   from: string,
    //   body: IConfirmationAccountToken
    // ): Promise<boolean>
    // requestUpdatePassword(from: string, body: IAuthentication): Promise<boolean>
    // requestValidateUserResetPasswordToken(
    //   from: string,
    //   body: IVerificationPasswordToken
    // ): Promise<boolean>
}/

export default class ServerService implements AuthenticationServerService{
    authenticationRepository: PostgresRepository

    constructor() {
        this.authenticationRepository = new PostgresRepository(db)
    }

    async requestSignIn(payload:IAuthentication){
        try {
            const usuarioExistente = this.authenticationRepository.checkIfUserExists(payload)
      
            if (usuarioExistente) {
              await bcrypt.compare(password, usuarioExistente.password, (err, same) => {
                if (err || !same) {
                  ErrorHandler(res,400,'errors.passwords_do_not_match')
                  return
                }
                if (same) {
                  const token = jwt.sign({ id:usuarioExistente.id, email, tenantId}, secret, { expiresIn: '1d' });
                  res.json({ token });
                }
              })
            } else {
      
              ErrorHandler(res,401,'errors.invalid_credentials')
            }
      
          } catch (error) {
      
            ErrorHandler(res,422,'errors.invalid_data')
          }
        this.authenticationRepository.requestSignIn('users', payload)
    }
    
}