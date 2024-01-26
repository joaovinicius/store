import { Authentication } from './Authentication'

export function AuthenticationFactory (
  tenantId: 0,
  email: '',
  password = '',
  passwordConfirmation = ''
): Authentication {
  return new Authentication({
    tenantId,
    email,
    password,
    passwordConfirmation
  })
}
