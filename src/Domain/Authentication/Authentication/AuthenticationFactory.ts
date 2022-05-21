import { Authentication } from './Authentication'

export function AuthenticationFactory (
  login = '',
  password = '',
  passwordConfirmation = ''
): Authentication {
  return new Authentication({
    login,
    password,
    passwordConfirmation
  })
}
