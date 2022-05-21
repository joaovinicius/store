import { LinkedinAccessToken } from './LinkedinAccessToken'

export function LinkedinAccessTokenFactory (
  grantType = '',
  code = '',
  clientId = '',
  redirectUri = '',
  clientSecret = ''
): LinkedinAccessToken {
  return new LinkedinAccessToken({
    grantType,
    code,
    clientId,
    redirectUri,
    clientSecret
  })
}
