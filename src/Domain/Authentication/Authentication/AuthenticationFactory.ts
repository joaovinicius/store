import { Authentication } from './Authentication'

export function AuthenticationFactory (
  login: string = '',
  password: string = '',
  passwordConfirmation: string = ''
): Authentication {
  return new Authentication({
    login,
    password,
    passwordConfirmation
  })
}
