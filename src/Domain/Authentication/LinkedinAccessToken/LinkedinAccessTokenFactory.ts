import { LinkedinAccessToken } from './LinkedinAccessToken'

export function LinkedinAccessTokenFactory (
  grantType: string = '',
  code: string = '',
  clientId: string = '',
  redirectUri: string = '',
  clientSecret: string = ''
): LinkedinAccessToken {
  return new LinkedinAccessToken({
    grantType,
    code,
    clientId,
    redirectUri,
    clientSecret
  })
}
