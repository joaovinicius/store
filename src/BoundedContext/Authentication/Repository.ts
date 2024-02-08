import { IAuthentication } from '../../Domain/Authentication/Authentication/IAuthentication'

export interface Repository {
  checkIfUserExists(payload:IAuthentication): Promise<boolean>
}
