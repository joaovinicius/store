export interface IAuthentication {
  tenantId: number
  email: string
  password?: string
  passwordConfirmation?: string
}
